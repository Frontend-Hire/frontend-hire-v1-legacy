import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Code from './components/Code';
import Pre from './components/Pre';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      const isInternalLink =
        props.href &&
        (props.href.startsWith('/') || props.href.startsWith('#'));
      if (isInternalLink) {
        return (
          <Link prefetch={false} href={props.href!}>
            {props.children}
          </Link>
        );
      }

      return <a target="_blank" {...props} />;
    },
    // @ts-expect-error
    // eslint-disable-next-line jsx-a11y/alt-text
    img: (props) => <Image {...props} />,
    code: Code,
    pre: Pre,
    ...components,
  };
}
