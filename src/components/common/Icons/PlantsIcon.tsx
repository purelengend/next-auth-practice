import { CustomClassType } from '@/types/components';

export const PlantsIcon = ({ customClass = 'w-6 h-6' }: CustomClassType) => (
  <svg
    className={customClass}
    fill="none"
    height={40}
    viewBox="0 0 40 40"
    width={40}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.6009 23.0771H18.2604L18.7304 22.6252L22.7425 18.7676C24.363 19.5522 26.1485 19.9706 27.9627 19.9906C29.7888 19.9953 31.5808 19.5148 33.1409 18.6022C37.885 15.8407 40.4271 9.44846 39.9411 1.50241C39.9182 1.12604 39.7524 0.770844 39.4751 0.504257C39.1979 0.23767 38.8285 0.0782541 38.437 0.0562747C30.1728 -0.409104 23.5245 2.03317 20.6525 6.59465C18.7804 9.56576 18.7324 13.1542 20.4785 16.5945L17.6004 19.3618L15.1583 17.0137C16.3583 14.4657 16.2723 11.8215 14.8803 9.61384C12.7062 6.15427 7.72206 4.31006 1.54587 4.65814C1.1551 4.68052 0.786432 4.83987 0.50963 5.10601C0.232829 5.37215 0.0671034 5.72663 0.0438198 6.10235C-0.320192 12.0388 1.59987 16.8311 5.19998 18.9233C6.40441 19.6304 7.78891 20.0032 9.2001 20.0002C10.4804 19.988 11.7432 19.7133 12.9042 19.1945L15.3363 21.5387L13.7362 23.0771H4.79997C4.37561 23.0771 3.96863 23.2392 3.66856 23.5277C3.36849 23.8162 3.19992 24.2075 3.19992 24.6156C3.19992 25.0236 3.36849 25.4149 3.66856 25.7034C3.96863 25.9919 4.37561 26.154 4.79997 26.154H6.71803L9.36011 37.5904C9.51498 38.2753 9.90977 38.8884 10.4784 39.327C11.0471 39.7656 11.7552 40.0032 12.4842 40H25.9186C26.6476 40.0032 27.3557 39.7656 27.9244 39.327C28.4931 38.8884 28.8879 38.2753 29.0427 37.5904L31.6848 26.154H33.6009C34.0252 26.154 34.4322 25.9919 34.7323 25.7034C35.0323 25.4149 35.2009 25.0236 35.2009 24.6156C35.2009 24.2075 35.0323 23.8162 34.7323 23.5277C34.4322 23.2392 34.0252 23.0771 33.6009 23.0771ZM23.4005 8.18886C25.4926 4.86967 30.4488 2.99662 36.801 3.07931C36.883 9.19654 34.9389 13.9599 31.4868 15.9638C29.1847 17.3099 26.4066 17.2214 23.6306 15.7368C22.0845 13.0773 22.0005 10.4023 23.4005 8.18886ZM12.0222 16.1753C10.1821 17.1234 8.36008 17.1676 6.85603 16.2907C4.55596 14.9503 3.22992 11.7907 3.19992 7.69271C7.46205 7.72156 10.7502 8.99654 12.1422 11.208C13.0542 12.6542 13.0002 14.4061 12.0222 16.1753ZM25.9186 36.9231H12.4842L10.0001 26.154H28.4007L25.9186 36.9231Z"
      fill="currentColor"
    />
  </svg>
);
