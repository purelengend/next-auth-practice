import Link from 'next/link';

// Models
import { IProductItem } from '@/models';

// Utils
import { cn } from '@/utils';

// Constants
import { ROUTER } from '@/constants';

// Components
import { ImageFallback } from '@/components';

interface ProductItemProps {
  product: IProductItem;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { id = '', img = '', name = '', price = 0 } = product || {};

  return (
    <Link href={`${ROUTER.PRODUCTS}/${id}`}>
      <div className="mx-auto cursor-pointer">
        <div className="relative w-full max-w-[300px] h-[365px]">
          <ImageFallback
            fill
            alt={`Image of ${name}`}
            src={img}
            className={cn(
              'shadow-md border border-border-secondary/20',
              'object-cover rounded-xl',
            )}
          />
        </div>

        <h3 className="text-lg font-medium mt-4 mb-2">{name}</h3>
        <p className="text-lg text-text-secondary font-medium">
          {price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
