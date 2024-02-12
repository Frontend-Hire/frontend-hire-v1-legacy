import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      const isInternalLink =
        props.href &&
        (props.href.startsWith('/') || props.href.startsWith('#'));
      if (isInternalLink) {
        return <Link href={props.href!}>{props.children}</Link>;
      }

      return <a target="_blank" {...props} />;
    },
    ...components,
  };
}
