import { Skeleton as SkeletonNextUI, SkeletonProps } from '@nextui-org/react';

// Utils
import { cn } from '@/utils';

type CustomSkeletonProps = SkeletonProps;

export const Skeleton = ({
  children,
  className,
  ...rest
}: CustomSkeletonProps) => (
  <SkeletonNextUI
    className={cn(
      'h-7 rounded-md shadow-md border border-border-secondary/20',
      className,
    )}
    {...rest}
  >
    {children}
  </SkeletonNextUI>
);
