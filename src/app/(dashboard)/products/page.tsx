import { Suspense } from 'react';
import { Metadata } from 'next';

// Constants
import { ROUTER } from '@/constants/router';

// Components
import { Container, SearchInput } from '@/components';

// UI components
import { ProductList, ProductListSkeleton } from '@/ui';

export const metadata: Metadata = {
  title: 'Product Listing',
};

const ProductsPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Container as="main">
      <h1 className="text-lg text-center uppercase font-semibold py-4">
        Product List
      </h1>

      <div className="flex justify-center my-6 px-4">
        <SearchInput />
      </div>

      <div className="px-6">
        <Suspense key={ROUTER.PRODUCTS} fallback={<ProductListSkeleton />}>
          <ProductList currentPage={currentPage} query={query} />
        </Suspense>
      </div>
    </Container>
  );
};

export default ProductsPage;
