import React from 'react';

export type HeadingItem = {
  id: string;
  title: string;
  depth: number;
};

export function getHeadings(children: React.ReactElement): HeadingItem[] {
  let headings: HeadingItem[] = [];

  // Recursively extracts text from nested children
  function extractText(children: React.ReactNode): string {
    if (children == null) {
      return '';
    } else if (typeof children === 'string' || typeof children === 'number') {
      return children.toString();
    } else if (Array.isArray(children)) {
      return children.map(extractText).join('');
    } else if (
      React.isValidElement(children) &&
      children.props &&
      children.props.children
    ) {
      return extractText(children.props.children);
    }
    return '';
  }

  function searchHeadings(child: React.ReactElement, depth: number = 0): void {
    if (
      React.isValidElement(child) &&
      typeof child.type === 'string' &&
      child.type.startsWith('h')
    ) {
      const title = extractText(
        (child.props as React.PropsWithChildren).children,
      );
      const id = (child.props as React.PropsWithChildren<{ id: string }>).id;
      headings.push({ id, title, depth });
    }

    if (
      typeof child === 'object' &&
      child !== null &&
      child.props &&
      child.props.children
    ) {
      React.Children.forEach(child.props.children, (nestedChild) => {
        searchHeadings(nestedChild, depth + 1);
      });
    }
  }

  React.Children.forEach(children, (child) => {
    searchHeadings(child, 0);
  });

  return headings;
}
