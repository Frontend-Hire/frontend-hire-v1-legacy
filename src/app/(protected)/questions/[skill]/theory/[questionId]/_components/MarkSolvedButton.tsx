'use client';

import QuestionSubmissionConfetti from '@/components/Questions/QuestionSubmissionConfetti';
import { Button } from '@/components/ui/button';
import getSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { Params } from '../_types';

export default function MarkSolvedButton() {
  const supabaseClient = getSupabaseBrowserClient();
  const [showConfetti, setShowConfetti] = React.useState(false);
  const { skill, questionId } = useParams<Params['params']>();

  const handleSubmit = async () => {
    setShowConfetti(true);
    try {
      const { data, error } = await supabaseClient
        .from('code_history')
        .select('*')
        .eq(
          'question_id',
          `${skill.toLowerCase()}-theory-${questionId.toLowerCase()}`,
        )
        .limit(1)
        .maybeSingle();

      if (!error) {
        if (data && data.id) {
          await supabaseClient
            .from('code_history')
            .update({ is_solved: true })
            .eq('id', data.id);

          return;
        }

        await supabaseClient.from('code_history').insert({
          is_solved: true,
          question_id: `${skill.toLowerCase()}-theory-${questionId.toLowerCase()}`,
        });
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        throw error;
      }
    }
  };

  return (
    <>
      <Button
        className="rounded-t-none bg-green-600 hover:bg-green-700"
        onClick={handleSubmit}
      >
        Mark as Solved
      </Button>
      {showConfetti && (
        <QuestionSubmissionConfetti
          CTA={
            <Button asChild>
              <Link href={`/questions/${skill}/theory`}>
                Practice Another Question
              </Link>
            </Button>
          }
          onClose={() => setShowConfetti(false)}
        />
      )}
    </>
  );
}
