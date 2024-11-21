import { notFound } from 'next/navigation';

// APIs
import { getProductById } from '@/api';
import ProductDetail from '@/ui/products/ProductDetail';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = async (props: ProductDetailPageProps) => {
  const { id } = await props.params;
  const productData = await getProductById(id);

  const {
    name = '',
    price = 0,
    img = '',
    description = '',
  } = productData || {};

  if (!productData) {
    notFound();
  }

  return (
    <ProductDetail
      description={description}
      img={img}
      name={name}
      price={price}
    />
  );
};

export default ProductDetailPage;
