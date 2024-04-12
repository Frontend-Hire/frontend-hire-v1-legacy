import slugify from 'slugify';

export interface HeadingItem {
  title: string;
  id: string;
  level: number;
}

export function useHeadings(blocks): HeadingItem[] {
  let headings: HeadingItem[] = blocks
    .filter(
      (each) =>
        typeof each.type === 'function' && each.type.name.startsWith('h'),
    )
    .map((each, index) => {
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
