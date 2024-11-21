'use client';

import {
  Pagination as PaginationNextUI,
  extendVariants,
  PaginationProps as NextUIPaginationProps,
} from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Constants
import { SEARCH_QUERIES } from '@/constants';

// Utils
import { cn } from '@/utils';
export const CustomPagination = extendVariants(PaginationNextUI, {
  variants: {
    color: {
      primary: {
        item: cn(
          'border border-gray-100 bg-transparent text-green-150 shadow-none',
          'data-[active=true]:bg-green-150 data-[active=true]:text-text-primary',
        ),
        wrapper: 'text-black dark:text-white',
        cursor: 'bg-green-150',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
});

const Pagination = ({ total, ...props }: NextUIPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentPage = searchParams?.get(SEARCH_QUERIES.PAGE) || 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set(SEARCH_QUERIES.PAGE, page.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center font-primary font-bold">
      <CustomPagination
        loop
        showControls
        page={+currentPage}
        total={total}
        onChange={handlePageChange}
        {...props}
      />
    </div>
  );
};

export default Pagination;
