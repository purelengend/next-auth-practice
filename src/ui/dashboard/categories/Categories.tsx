import { type StaticImageData } from 'next/image';

// Utils
import { cn } from '@/utils';

// Constants
import { ImageStore } from '@/constants/images';

// Components
import { RightArrowIcon, Button, ImageFallback } from '@/components';

interface Category {
  title: string;
  imageSrc: string | StaticImageData;
  altText: string;
  description?: string;
  hasDescription: boolean;
}

const categoriesData: Category[] = [
  {
    title: 'Natural Plants',
    imageSrc: ImageStore.FirstCategoryImage,
    altText: 'Image of first category',
    hasDescription: false,
  },
  {
    title: 'Plant Accessories',
    imageSrc: ImageStore.SecondaryCategoryImage,
    altText: 'Image of secondary category',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hasDescription: true,
  },
  {
    title: 'Artificial Plants',
    imageSrc: ImageStore.ThirdCategoryImage,
    altText: 'Image of third category',
    hasDescription: false,
  },
];

const CategoryItem = ({
  title,
  imageSrc,
  altText,
  description,
  hasDescription,
}: Category) => (
  <li
    className={cn(
      'w-full max-w-[352px] flex flex-col gap-3 items-center cursor-pointer',
      { 'relative top-[-98px]': !hasDescription },
    )}
  >
    <ImageFallback
      alt={altText}
      height={352}
      src={imageSrc}
      width={512}
      className={cn(
        'w-[352px] h-[512px]',
        'shadow-md border border-border-secondary/20',
        'object-cover rounded-xl',
      )}
    />
    <span className="font-bold text-lg">{title}</span>
    {hasDescription && (
      <p className="text-lg text-gray-150 font-medium text-center">
        {description}
      </p>
    )}
  </li>
);

const Categories = () => (
  <section className="categories-section flex flex-col gap-24 mt-24">
    <div className="w-full text-center">
      <h3 className="text-3xl font-medium mb-4">Categories</h3>
      <span className="font-medium text-base text-text-secondary">
        Find what you are looking for
      </span>
    </div>

    <div className="bg-background-secondary pb-24">
      <ul className="flex w-full justify-center gap-4 lg:gap-24 pt-12 px-4">
        {categoriesData.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </ul>

      <Button
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
);

export default Categories;
