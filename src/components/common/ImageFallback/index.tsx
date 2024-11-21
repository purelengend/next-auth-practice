'use client';

import { memo, useCallback, useState } from 'react';
import Image, { ImageProps, type StaticImageData } from 'next/image';

// Constants
import { IMAGE_BLUR_SRC, IMAGE_FALLBACK_SRC } from '@/constants';

interface ImageFallbackProps extends ImageProps {
  src: StaticImageData | string;
  alt: string;
  blurDataURL?: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImageFallback = ({
  src,
  alt,
  blurDataURL = IMAGE_BLUR_SRC.DEFAULT,
  fallbackSrc = IMAGE_FALLBACK_SRC.DEFAULT,
  width,
  height,
  ...rest
}: ImageFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleFallbackImage = useCallback(
    () => setImgSrc(fallbackSrc),
    [fallbackSrc],
  );

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const img = event.currentTarget;
      if (img.naturalWidth === 0) setImgSrc(fallbackSrc);
    },
    [fallbackSrc],
  );

  return (
    <>
      <Image
        priority
        alt={alt}
        blurDataURL={blurDataURL}
        height={height}
        placeholder="blur"
        src={imgSrc}
        width={width}
        onError={handleFallbackImage}
        onLoad={handleLoad}
        {...rest}
      />
    </>
  );
};

export default memo(ImageFallback);
