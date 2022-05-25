import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Catalog } from '../components/Catalog'
import { Header } from '../components/Header'
import { listProducts } from '../services/product'

interface Product {
  id: string;
  name: string;
  fabricante: string;
  price: string;
}

const Home: NextPage = () => {
  const [products, setProducts] = useState([] as Product[]);
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
  return (
    <div className="">
      <Header />

      <Catalog title="Produtos">
        {products.map(({ id, name, price }) => (
          <Card name={name} price={price} image="ff" key={id}/>
        ))}
      </Catalog>

      <footer className="flex h-32 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-1">
            <p>made by {' '} <a className="text-blue-600 underline" href="https://github.com/huandrey">huandrey</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Home;
