// Utils
import { cn } from '@/utils';

// Components
import { FrameIcon, Skeleton, RightArrowIcon, Button } from '@/components';

const totalItems = 10;

const ProductItemSkeleton = () => {
  return (
    <div>
      <Skeleton
        className="max-w-[300px] h-[365px] rounded-xl"
        classNames={{
          content: 'w-full h-full flex justify-center items-center opacity-100',
        }}
      >
        <FrameIcon customClass="w-14 h-14" />
      </Skeleton>
      <Skeleton className="w-3/4 mt-4 mb-2" />
      <Skeleton className="w-1/2" />
    </div>
  );
};

const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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

      {/* Skeleton items for products */}
      {Array.from({ length: totalItems }).map((_, index) => (
        <ProductItemSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
