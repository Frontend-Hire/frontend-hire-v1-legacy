import slugify from 'slugify';

export type HeadingItem = {
  title: string;
  id: string;
  level: number;
};

export function useHeadings(blocks: any): HeadingItem[] {
  const headings: HeadingItem[] = blocks
    .filter(
      (each: any) =>
        typeof each.type === 'function' && each.type.name.startsWith('h'),
    )
    .map((each: any) => {
      const type = each.type.name;
      const title = each.props.children;
      const id = slugify(title, { lower: true, strict: true });
      return {
        title,
        id,
        level: parseInt(type.substring(1)),
      };
    });

  return headings;
}
