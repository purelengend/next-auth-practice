// Utils
import { cn } from '@/utils';

// Types
import { IProductItem } from '@/models';

// APIs
import { getProductList } from '@/api';

// Components
import { RightArrowIcon, Button, Pagination } from '@/components';
import ProductItem from './ProductItem';

interface ProductListProps {
  query: string;
  currentPage?: number;
}

const ProductList = async ({ currentPage, query }: ProductListProps) => {
  const products = await getProductList({ currentPage, query });

  const { items = [], count = 0 } = products || {};
  const pageCount = Math.ceil(count / 10);
  const isShowPagination = items.length > 0 && pageCount > 1;

  if (items.length === 0) {
    return (
      <div className="text-center text-base lg:text-lg text-text-secondary">
        {query
          ? `We couldn't find any product with the keyword "${query}"`
          : 'There are no products in this list'}
      </div>
    );
  }

  return (
    <>
      <section className="product-list grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-1 p-6 flex flex-col">
          <div>
            <h3 className="text-3xl font-bold mb-4">Best Selling Plants</h3>
            <p className="text-base text-text-secondary mb-6">
              Easiest way to healthy life by buying your favorite plants.
            </p>
          </div>
          <Button
            endIcon={<RightArrowIcon />}
            customClass={cn(
              'py-3 px-6 max-w-[168px]',
              'bg-background-secondary hover:bg-background-secondary/80',
              'justify-between rounded-lg font-medium transition-all',
            )}
          >
            See More
          </Button>
        </div>

        {items.map((product: IProductItem) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>

      {isShowPagination && (
        <div className="flex w-full justify-end mx-auto">
          <Pagination total={pageCount} />
        </div>
      )}
    </>
  );
};

export default ProductList;
