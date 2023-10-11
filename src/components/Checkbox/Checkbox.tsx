'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cva } from 'cva';

const checkbox = cva(
  'flex items-center justify-center border border-gray-900 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white',
  {
    variants: {
      size: {
        default: 'h-5 w-5 rounded-sm',
        md: 'h-6 w-6 rounded-sm',
        lg: 'h-8 w-8 rounded-sm',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  size?: 'md' | 'lg';
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ size, className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={checkbox({ size, className })}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <Check />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
