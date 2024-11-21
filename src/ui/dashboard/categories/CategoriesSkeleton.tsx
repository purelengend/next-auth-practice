// Utils
import { cn } from '@/utils';

// Components
import { RightArrowIcon, Skeleton, Button } from '@/components';

const totalItems = 3;

const CategoriesSkeleton = () => (
  <>
    <section className="categories-section flex flex-col gap-24 mt-24">
      <div className="w-full text-center">
        <h3 className="text-3xl font-medium mb-4">Categories</h3>
        <span className="font-medium text-base text-text-secondary">
          Find what you are looking for
        </span>
      </div>

      <div className="bg-background-secondary pb-24">
        <ul className="flex w-full justify-center gap-4 lg:gap-24 pt-12 px-4">
          {Array.from({ length: totalItems }).map((_, index) => (
            <li
              key={index}
              className={cn(
                'w-full max-w-[352px] flex flex-col gap-3 items-center',
                {
                  'relative top-[-98px]': index !== 1,
                },
              )}
            >
              <Skeleton className="w-full h-[512px] rounded-xl" />
              <Skeleton className="w-3/4" />
              {index === 1 && <Skeleton className="h-20 w-3/4" />}
            </li>
          ))}
        </ul>

        <Button
          disabled
          endIcon={<RightArrowIcon />}
          customClass={cn(
            'mx-auto mt-6 bg-background-default',
            'gap-2 py-3 px-6 max-w-[168px]',
            'justify-between rounded-lg font-medium transition-all',
            'border hover:border-border-secondary',
          )}
        >
          Explore
        </Button>
      </div>
    </section>
  </>
);

export default CategoriesSkeleton;
