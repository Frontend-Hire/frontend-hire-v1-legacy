export const code = `import * as React from 'react';
import { cva } from 'class-variance-authority';

import styles from './Button.module.css';

// If using TailwindCSS, replace styles.base with tailwindCSS classes example, "border bg-red-500".
const button = cva(styles.base, {
  variants: {
    intent: {
      // Add intents like primary, secondary, ghost
    },
    size: {
      // Add sizes like small, medium, large
    },
  },
  defaultVariants: {
    // What are the default variants?
  },
});

const Button = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);

export default Button;
`;
