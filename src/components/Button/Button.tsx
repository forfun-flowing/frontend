'use client';

import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

type ButtonProps<T extends React.ElementType = 'button'> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  isDark?: boolean;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
} & React.ComponentProps<'button'>;

export default forwardRef(function Button<T extends React.ElementType = 'button'>(
  {
    as,
    isDark,
    disabled,
    className,
    children,
    variant = 'contained',
    ...rest
  }: PropsWithStrictChildren<ButtonProps<T>>,
  ref: React.ForwardedRef<T>,
) {
  const Element = as || 'button';

  return (
    <Element
      {...rest}
      ref={ref}
      className={cn(
        `flex h-[52px] w-full items-center justify-center rounded-xl px-4 font-bold`,
        {
          'bg-primary-300 text-white': variant === 'contained',
          'bg-gray-200 font-normal': variant === 'contained' && disabled,
          'border border-primary-300 bg-white text-primary-300': variant === 'outlined',
          'border-gray-200 text-gray-400': variant === 'outlined' && disabled,
          'bg-none text-primary-300': variant === 'text',
          'bg-none text-gray-400': variant === 'text' && disabled,
          'dark:text-white': isDark,
          'dark:bg-gray-700 dark:font-normal dark:text-gray-500': disabled && isDark,
        },
        className,
      )}
      type={rest.type ?? 'button'}
      disabled={disabled}
    >
      {children}
    </Element>
  );
});
