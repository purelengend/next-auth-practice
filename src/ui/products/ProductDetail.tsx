// Utils
import { cn } from '@/utils';

// Components
import { Container, ImageFallback } from '@/components';

interface ProductDetailProps {
  name: string;
  price: number;
  img: string;
  description?: string;
}

const ProductDetail = ({
  name,
  price,
  img,
  description,
}: ProductDetailProps) => {
  return (
    <Container className="flex flex-col md:flex-row pt-6 px-4 gap-5">
      <div className="relative flex-1 mx-auto w-full aspect-[29/34]">
        <ImageFallback
          fill
          alt="The product image"
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          src={img}
          className={cn(
            'shadow-none border-2 border-border-secondary/20',
            'rounded-xl object-cover',
          )}
        />
      </div>

      <div className={cn('flex-1 flex flex-col', 'mx-auto space-y-6')}>
        <h2 className="text-2xl font-bold">{name}</h2>

        <span className="font-bold text-lg text-green-150">
          {price.toFixed(2)} $
        </span>

        {description && (
          <p className="text-gray-600">
            <span className="font-bold">Description:</span> {description}
          </p>
        )}
      </div>
    </Container>
  );
};

export default ProductDetail;
