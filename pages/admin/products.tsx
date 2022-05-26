import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Catalog } from '../../components/Catalog'
import { Header } from '../../components/Header'
import { Modal } from '../../components/Modal'
import { listProducts } from '../../services/product'

interface Product {
  id: string;
  name: string;
  fabricante: string;
  price: string;
}

const Products: NextPage = () => {
  const [products, setProducts] = useState([] as Product[]);
  const [visible, setVisible] = useState(false);
  
  function handleVisibility() {
    setVisible(prev => !prev);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await listProducts();

        const responseFormatted = response.map((product) => {
        
          return { id: product.id, name: product.nome, fabricante: product.preco, price: product.preco };
        })

        setProducts(responseFormatted);

      } catch (err) {
  
      }
  
    }
    getProducts();
  }, [])
console.log(products)

  const actions = {
    delete: (id: string) => handleVisibility(),
  }
  return (
    <div className="">
      <Header />

      <Catalog title="Produtos">
        {products.map(({ id, name, price }) => (
          <Card name={name} price={price} image="ff" key={id} admin actions={actions}/>
        ))}
      </Catalog>

      <Modal
        title='Deseja apagar o produto?' 
        subtitle='Essa acao nao pode ser desfeita.' 
        visible={visible}
        setVisible={handleVisibility} 
        type="alert"
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={handleVisibility}
            className="px-5 py-2 mt-4  bg-green-600 hover:bg-green-700 rounded-md text-white w-full"
          >
            nao
          </button>
          <button 
            onClick={handleVisibility}
            className="px-5 py-2 mt-4  bg-red-600 hover:bg-red-700 rounded-md text-white w-full"
          >
            sim
          </button>
        </div>
      </Modal>

      <footer className="flex h-32 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-1">
            <p>made by {' '} <a className="text-blue-600 underline" href="https://github.com/huandrey">huandrey</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Products;
