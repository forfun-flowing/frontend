import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

type FlexProps<T extends React.ElementType> = React.ComponentPropsWithRef<T> & {
  as?: T;
  children?: React.ReactNode;
  isCentered?: boolean;
  direction?: 'row' | 'column';
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch';
  align?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  className?: string;
  gap?: number;
};

export default forwardRef(function Col<T extends React.ElementType>(
  {
    as,
    children,
    direction = 'column',
    justify,
    align,
    wrap,
    className,
    gap,
    isCentered,
    ...props
  }: PropsWithStrictChildren<FlexProps<T> & React.ComponentPropsWithoutRef<T>>,
  ref: React.ComponentPropsWithRef<T>['ref'],
) {
  const Element = as ?? 'div';

  return (
    <Element
      ref={ref}
      className={cn(
        'flex',
        {
          'justify-center': justify === 'center',
          'justify-start': justify === 'start',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
          'justify-evenly': justify === 'evenly',
          'justify-stretch': justify === 'stretch',
        },
        {
          'items-center': align === 'center',
          'items-start': align === 'start',
          'items-end': align === 'end',
          'items-between': align === 'between',
          'items-around': align === 'around',
          'items-evenly': align === 'evenly',
          'items-stretch': align === 'stretch',
        },
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'column',
        },
        {
          'flex-wrap': wrap === 'wrap',
          'flex-nowrap': wrap === 'nowrap',
          'flex-wrap-reverse': wrap === 'wrap-reverse',
        },
        { 'items-center justify-center': isCentered },
        className,
      )}
      style={{ gap }}
      {...props}
    >
      {children}
    </Element>
  );
}) as <T extends React.ElementType>(
  props: PropsWithStrictChildren<FlexProps<T> & React.ComponentPropsWithoutRef<T>> & {
    ref?: React.ComponentPropsWithRef<T>['ref'];
  },
) => JSX.Element;
