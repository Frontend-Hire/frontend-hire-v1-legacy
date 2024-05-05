'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { QuestionOverview } from '@/types/Question';
import QuestionItem from './QuestionItem';

type QuestionsCarouselProps = {
  questions: QuestionOverview[];
};

export default function QuestionsCarousel({
  questions,
}: QuestionsCarouselProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      orientation="vertical"
      plugins={[
        AutoScroll({
          speed: 0.8,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="h-[250px]">
        {questions.map((question) => (
          <CarouselItem key={question.id} className="basis-1/3">
            <QuestionItem {...question} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
