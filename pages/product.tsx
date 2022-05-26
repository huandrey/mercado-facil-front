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
  // useEffect(() => {
  //   async function getLoteByProductId() {
  //     try {
  //       const response = await listProducts();

  //     } catch (err) {
  
  //     }
  
  //   }
  //   getProducts();
  // }, [])
  return (
    <div className="">
      <Header />

      <div className="max-w-5xl	mx-auto mt-10 shadow-lg">
        <h2>ipsum lorem</h2>

      </div>

    </div>
  )
}

export default Home;
