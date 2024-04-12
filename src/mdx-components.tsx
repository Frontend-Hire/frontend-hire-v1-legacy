import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Code from './components/Code';
import Pre from './components/Pre';
import slugify from 'slugify';

const SLUGIFY_PAYLOAD = { lower: true, strict: true };

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 id={slugify(props.children, SLUGIFY_PAYLOAD)}>{props.children}</h1>
    ),
    h2: (props) => (
      <div
        id={slugify(props.children, SLUGIFY_PAYLOAD)}
        className="scroll-m-20 border-b py-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      >
        <span>{props.children}</span>
      </div>
    ),
    h3: (props) => (
      <div
        id={slugify(props.children, SLUGIFY_PAYLOAD)}
        className="scroll-m-20 py-4 text-2xl font-semibold tracking-tight"
      >
        <span>{props.children}</span>
      </div>
    ),
    a: (props) => {
      const isInternalLink =
        props.href &&
        (props.href.startsWith('/') || props.href.startsWith('#'));
      if (isInternalLink) {
        return <Link href={props.href!}>{props.children}</Link>;
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
