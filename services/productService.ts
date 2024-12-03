import { api } from "./api";
import { IProduct } from '../types/IProduct';

export const getProducts = async():Promise<IProduct[]> =>{
  // GET axios
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id:number):Promise<IProduct> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
}