import slugify from 'slugify';

export type HeadingItem = {
  title: string;
  id: string;
  level: number;
};

function handleSteps(steps: React.ReactElement[]): HeadingItem[] {
  return steps
    .filter(
      (each: React.ReactElement) =>
        typeof each.type === 'function' && each.type.name.startsWith('h'),
    )
    .map((each: React.ReactElement) => handleHeading(each));
}

function handleHeading(block: any): HeadingItem {
  const type: string = block.type.name;
  const title: string = block.props.children;
  const id: string = slugify(title, { lower: true, strict: true });
  const level: number = parseInt(type.substring(1));

  return {
    title,
    id,
    level,
  };
}

export function getHeadings(blocks: React.ReactElement[]): HeadingItem[] {
  const headings: HeadingItem[] = [];

  // iterate over each block and collect headings
  for (let each of blocks) {
    if (typeof each.type === 'function') {
      const type = each.type.name;

      // get all headings from Steps component
      if (type === 'Steps') {
        const steps = handleSteps(each.props.children);
        headings.push(...steps);
      }

      // collect if any headings are littred outside
      else if (type.startsWith('h')) {
        headings.push(handleHeading(each));
      }
    }
  }

  return headings;
}
