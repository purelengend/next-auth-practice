import { CustomClassType } from '@/types/components';

export const FacebookIcon = ({ customClass = 'w-6 h-6' }: CustomClassType) => (
  <svg
    className={customClass}
    fill="none"
    height={16}
    viewBox="0 0 10 16"
    width={10}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.66488 15.9168H5.99821V9.24183H9.00155L9.33155 5.92516H5.99821V4.25016C5.99821 4.02915 6.08601 3.81719 6.24229 3.66091C6.39857 3.50463 6.61053 3.41683 6.83155 3.41683H9.33155V0.0834961H6.83155C5.72648 0.0834961 4.66667 0.522483 3.88527 1.30388C3.10387 2.08529 2.66488 3.14509 2.66488 4.25016V5.92516H0.998213L0.668213 9.24183H2.66488V15.9168Z"
      fill="currentColor"
      fillOpacity="0.75"
    />
  </svg>
);
