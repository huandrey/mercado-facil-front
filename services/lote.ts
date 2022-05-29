import { api } from './api';

interface Lote {
  idProduto: string;
  quantidade: number;
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

async function createLote(data: Lote) {
  const lote = await api.post('/lote/', data);

  return lote;
}

async function getLoteByProductId() {
  
}


export { createLote };