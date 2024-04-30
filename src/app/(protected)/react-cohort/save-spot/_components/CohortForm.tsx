'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Full name must be at least 2 characters',
    })
    .max(100),
  htmlExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  cssExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  jsExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  reactExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  areYouAStudent: z.enum(['yes', 'no']).optional(),
  linkedIn: z.string().url().optional(),
});

export default function CohortForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">Save your spot</CardTitle>
        <CardDescription>
          There are limited spots, so make sure you are available on the below
          dates and time.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <p className="text-muted">
                  Day 1:{' '}
                  <time className="text-link" dateTime="2024-06-01">
                    June 1st, 2024
                  </time>
                </p>
                <p className="text-muted">
                  Session 1:{' '}
                  <time className="text-link" dateTime="2024-06-01T11:00+05:30">
                    11:00 AM
                  </time>{' '}
                  to{' '}
                  <time className="text-link" dateTime="2024-06-01T12:30+05:30">
                    12:30 PM IST
                  </time>
                </p>
                <p className="text-muted">
                  Session 2:{' '}
                  <time className="text-link" dateTime="2024-06-01T11:00+05:30">
                    2:00 PM
                  </time>{' '}
                  to{' '}
                  <time className="text-link" dateTime="2024-06-01T15:30+05:30">
                    3:30 PM IST
                  </time>
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-muted">
                  Day 2:{' '}
                  <time className="text-link" dateTime="2024-06-02">
                    June 2nd, 2024
                  </time>
                </p>
                <p className="text-muted">
                  Session 1:{' '}
                  <time className="text-link" dateTime="2024-06-02T11:00+05:30">
                    11:00 AM
                  </time>{' '}
                  to{' '}
                  <time className="text-link" dateTime="2024-06-02T12:30+05:30">
                    12:30 PM IST
                  </time>
                </p>
                <p className="text-muted">
                  Session 2:{' '}
                  <time className="text-link" dateTime="2024-06-02T14:00+05:30">
                    2:00 PM
                  </time>{' '}
                  to{' '}
                  <time className="text-link" dateTime="2024-06-02T15:30+05:30">
                    3:30 PM IST
                  </time>
                </p>
              </div>
            </div>

            <hr />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <hr />

            <FormDescription>
              The below fields are optional and are used as analytics to improve
              the cohort&apos;s content.
            </FormDescription>
            <FormField
              control={form.control}
              name="htmlExperience"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>What is your experience with HTML?</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lessThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Less than 6 months
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="moreThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          More than 6 months
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cssExperience"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>What is your experience with CSS?</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lessThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Less than 6 months
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="moreThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          More than 6 months
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jsExperience"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    What is your experience with JavaScript?
                  </FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lessThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Less than 6 months
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="moreThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          More than 6 months
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reactExperience"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>What is your experience with React?</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lessThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Less than 6 months
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="moreThan6" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          More than 6 months
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="areYouAStudent"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Are you a Student?</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your LinkedIn Profile</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Spot</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
