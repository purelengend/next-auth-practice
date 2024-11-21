'use client';

import { ChangeEvent } from 'react';
import { Input } from '@nextui-org/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

// Constants
import { SEARCH_QUERIES } from '@/constants';

// Utils
import { cn } from '@/utils';

// Components
import { SearchIcon, Button } from '@/components';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const defaultValue = searchParams.get(SEARCH_QUERIES.QUERY)?.toString();

  const handleSearchChange = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const value = event.target.value;

      if (value) {
        params.set(SEARCH_QUERIES.QUERY, value);
      } else {
        params.delete(SEARCH_QUERIES.QUERY);
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

  return (
    <Input
      aria-label="search input field"
      data-testid="search-input"
      defaultValue={defaultValue}
      placeholder="What are you looking for?"
      classNames={{
        base: 'max-w-[450px] max-h-16 rounded-xl outline outline-gray-200',
        innerWrapper: 'flex gap-2',
        input: cn('text-small', 'focus:outline-none focus:ring-0'),
        inputWrapper:
          'p-2 pl-4 rounded-xl bg-background-default h-full font-normal',
      }}
      endContent={
        <Button
          ariaLabel="search-input-button"
          customClass={cn(
            'transition-all rounded-lg p-3 bg-background-secondary',
            'text-base font-primary font-medium',
            'hover:bg-background-secondary/80',
          )}
        >
          <SearchIcon customClass="w-4 h-4" />
        </Button>
      }
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
