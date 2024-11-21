'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constants
import { ROUTER } from '@/constants/router';

// Utils
import { cn } from '@/utils';

// Components
import { type LinkWithIconProps } from '@/components';

const NAVIGATION_ITEMS: LinkWithIconProps[] = [
  {
    url: ROUTER.HOME,
    text: 'Home',
    title: 'Homepage',
  },
  {
    url: ROUTER.PRODUCTS,
    text: 'Products',
    title: 'Products Page',
  },
  {
    url: ROUTER.CONTACTS,
    text: 'Contacts',
    title: 'Contacts Page',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 text-base md:text-lg sm:gap-6 md:gap-12">
      {NAVIGATION_ITEMS.map(({ url, text, title }) => {
        const isActive =
          pathname === url || pathname.includes(text.toLowerCase());

        return (
          <Link
            key={text}
            href={url}
            title={title}
            className={cn(
              'text-text-secondary hover:text-text-default',
              isActive && 'text-text-default border-b border-border-default',
            )}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
