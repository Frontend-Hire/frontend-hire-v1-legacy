'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cva } from 'cva';

const checkbox = cva(
  'flex items-center justify-center h-4 w-4 rounded-md border data-[state=checked]:bg-gray-900 data-[state=checked]:text-white',
  {
    variants: {
      size: {
        default: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
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
