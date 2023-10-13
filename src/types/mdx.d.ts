export type Meta = { id?: string; title?: string; expectedOutput?: string };

declare module '*.mdx' {
  export const meta: Meta;
}
