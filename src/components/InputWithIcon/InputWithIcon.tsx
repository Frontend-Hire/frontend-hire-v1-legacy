import React from 'react';
import { Input, InputProps } from '../ui/input';
import { cn } from '@/lib/utils';

interface InputWithIconProps extends InputProps {
  icon: React.ReactNode;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ icon, className, ...props }, ref) => {
    const cloneIcon = React.cloneElement(icon as React.ReactElement, {
      className: 'absolute left-2 h-4 w-4 text-gray-300',
    });

    return (
      <div className="relative flex w-full items-center">
        {cloneIcon}
        <Input className={cn('pl-8', className)} ref={ref} {...props} />
      </div>
    );
  },
);

InputWithIcon.displayName = 'InputWithIcon';

export default InputWithIcon;
