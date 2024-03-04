import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

export type ApiError = { message: string };

export type Product = {
  id: string;
  name: string;
  pictureUrl: string;
  description: string;
  price: number;
  type: string;
  brand: string;
  QuantityInStock: number;
};

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>('/products');
  const products: Product[] = res.data;
  return products;
}
