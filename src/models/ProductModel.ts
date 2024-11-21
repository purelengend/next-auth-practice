// This file contains type definitions for your data.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type IProductItem = {
  id: string;
  name: string;
  price: number;
  img?: string;
  description?: string;
};

export type ProductModel = {
  items: IProductItem[];
  count?: number;
};
