export type SystemDesign = {
  id: string;
  title: string;
  description: string;
  link: string;
  isPro: boolean;
  isPublished?: boolean;
  publishedOn?: Date;
  chapters: Record<string, string>;
  isNew?: boolean;
};
