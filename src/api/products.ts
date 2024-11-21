// Constants
import { API_ENDPOINT } from '@/constants';

// Models
import { IProductItem, ProductModel } from '@/models';

export const getProductList = async ({
  currentPage,
  limit = 10,
  query,
}: { currentPage?: number; limit?: number; query?: string } = {}) => {
  const PRODUCT_LIST_URL = `${process.env.API_URL}/${API_ENDPOINT.PRODUCT_LIST}?page=${currentPage}&limit=${limit}&name=${query}`;

  try {
    const res = await fetch(PRODUCT_LIST_URL);
    const data: ProductModel = await res.json();

    return data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getProductById = async (id: string) => {
  const PRODUCT_DETAIL_URL = `${process.env.API_URL}/${API_ENDPOINT.PRODUCT_LIST}/${id}`;

  try {
    const res = await fetch(PRODUCT_DETAIL_URL);
    const data: IProductItem = await res.json();

    return data;
  } catch (error) {
    throw new Error(String(error));
  }
};
