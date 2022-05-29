import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { Card } from '../components/Card'
import { Catalog } from '../components/Catalog'
import { Header } from '../components/Header'
import { listProducts } from '../services/product'

interface Product {
  id: string
  name: string
  fabricante: string
  price: string
}

const Home: NextPage = () => {
  const [products, setProducts] = useState([] as Product[])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProducts() {
      let i = 0
      try {
        setLoading(true);
        const response = await listProducts(false)
        const responseFormatted = response.map((product) => {
          i++
          return {
            id: product.id,
            name: product.nome,
            fabricante: product.fabricante,
            price: String(product.preco),
          }
        })

        setProducts(responseFormatted)
        localStorage.setItem('total_products', String(i))
      } catch (err) {}
      setLoading(false);
    }
    getProducts()
  }, [])
  console.log(products)
  return (
    <div className="">
      <Header />
      {loading ? (
        <div className="max-w-5xl p-32 mx-auto flex items-center justify-center">
          <Oval
            ariaLabel="loading-indicator"
            height={38}
            width={38}
            strokeWidth={5}
            color="#2463EB"
            secondaryColor="#e9e9e9"
          />
        </div>
      ) : (
        <Catalog title="Produtos">
          {products.map(({ id, name, price }) => (
            <Card name={name} price={price} image="ff" key={id} />
          ))}
        </Catalog>
      )}

      <footer className="flex h-32 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-1">
          <p>
            made by{' '}
            <a
              className="text-blue-600 underline"
              href="https://github.com/huandrey"
            >
              huandrey
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
