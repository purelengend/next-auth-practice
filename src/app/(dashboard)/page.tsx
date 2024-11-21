import { Suspense } from 'react';
import { Divider } from '@nextui-org/react';

// Utils
import { cn } from '@/utils';

// Constants
import { ROUTER } from '@/constants/router';

// UI components
import {
  ProductListSkeleton,
  IntroductionSkeleton,
  CategoriesSkeleton,
  Categories,
  Introduction,
  ProductList,
} from '@/ui';

// Components
import { Container, SearchInput } from '@/components';
import { auth } from '@/auth';

const Homepage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const user = (await auth()) || {};
  console.log(user);
  return (
    <Container as="main" className="px-4 h-full">
      <section
        className={cn(
          'hero-section h-[512px] flex w-full mt-12 mb-24 p-12 rounded-3xl',
          'bg-hero-image bg-cover bg-center bg-no-repeat',
        )}
      >
        <div className="w-[512px]">
          <h2 className="font-extrabold text-6xl">Buy your dream plants</h2>
          <div className="flex gap-12 pt-6 pb-12">
            <p className="font-medium text-md whitespace-pre-line">{`50+ \nPlant Species`}</p>

            <Divider
              className="h-12 border-border-default border-small"
              orientation="vertical"
            />

            <p className="font-medium text-md whitespace-pre-line">{`100+ \nCustomers`}</p>
          </div>

          <SearchInput />
        </div>
      </section>

      <Suspense key={ROUTER.PRODUCTS} fallback={<ProductListSkeleton />}>
        <ProductList currentPage={currentPage} query={query} />
      </Suspense>

      <Suspense fallback={<IntroductionSkeleton />}>
        <Introduction />
      </Suspense>

      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
    </Container>
  );
};

export default Homepage;
