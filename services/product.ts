import { api } from './api';

interface Produto {
  name: string;
  fabricante: string;
  preco: string;
}

interface ProductResponse {
  data: Product[];
}

interface Product {
  id: string;
  nome: string;
  fabricante: string;
  preco: number;
}

async function createProduct(data: Produto) {
  const product = await api.post('/produto/', {
    ...data,
    nome: data.name,
    preco: Number(data.preco),
  });

  return product;
}

async function listProducts(): Promise<Product[]> {
  const { data: products } = await api.get<ProductResponse>('/produtos/');
  return products;
}


export { createProduct, listProducts};