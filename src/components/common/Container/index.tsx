import { createElement, memo, ReactNode } from 'react';

// Utils
import { cn } from '@/utils';

interface ContainerProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode;
  as?: string;
}

const Container = ({ as = 'div', className = '', ...props }: ContainerProps) =>
  createElement(as, {
    ...props,
    className: cn('mx-auto container', className),
  });

export default memo(Container);
