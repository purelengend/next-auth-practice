import ContactsBackgroundImage from '@/images/contacts-bg-image.webp';
import FirstCategoryImage from '@/images/first-category.webp';
import SecondaryCategoryImage from '@/images/secondary-category.webp';
import ThirdCategoryImage from '@/images/third-category.webp';
import HeroImage from '@/images/hero-image.webp';

const ImageStore = {
  ContactsBackgroundImage,
  FirstCategoryImage,
  SecondaryCategoryImage,
  ThirdCategoryImage,
  HeroImage,
};

const IMAGE_BLUR_SRC = {
  DEFAULT:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAG5JREFUKFONkEsOgCAMRKf3v5PFvdFoNPzuQg0oUaIoq4bm9Q0Z6vQgkAAgACKQc5bvAGI9Sly+A4IsITZTMkbXl5nYzhIjj6j6AbFd2kDl1gSWf3yaSbntBcyHVxukvL5F182kvGkDe+9iL7897nJgv2UBC3r2AAAAAElFTkSuQmCC',
};

const IMAGE_FALLBACK_SRC = {
  DEFAULT: 'https://i.postimg.cc/1t4F44yQ/unavailable-image.webp',
};

export { ImageStore, IMAGE_BLUR_SRC, IMAGE_FALLBACK_SRC };
