import type { ReactNode } from 'react';
import Link from 'next/link';

// Utils
import { cn } from '@/utils';

export type LinkWithIconProps = {
  url: string;
  text: string;
  title?: string;
  icon?: ReactNode;
  additionalClass?: string;
};

export const LinkWithIcon = ({
  url,
  text,
  title,
  icon,
  additionalClass = 'rounded-lg border border-border-default px-2 py-1',
}: LinkWithIconProps) => (
  <Link
    href={url}
    title={title || text}
    className={cn(
      'flex items-center hover:bg-slate-50 hover:text-text-default',
      additionalClass,
    )}
  >
    {icon}
    {text}
  </Link>
);
