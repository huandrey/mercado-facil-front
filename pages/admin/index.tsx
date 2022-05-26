import type { NextPage } from 'next'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
import { Header } from '../../components/Header'

interface Product {
  id: string;
  name: string;
  fabricante: string;
  price: string;
}

const Home: NextPage = () => {
  const [options, setOptions] = useState({
    title: 'Gráfico de vendas',
    backgroundColor: '#F5F5F5',
  });
  const [optionsBar, setOptionsBar] = useState({
    title: 'Gráfico de Barra'
  });
  const [data, setData] = useState([
    ['Produtos', 'Quantidade'],
    ['iPhone 12', 100],
    ['SmartTV', 80],
    ['Batata Frita', 50],
  ]);
  const [dataBar, setDataBar] = useState([
    ['Cidades', '2010 População', '2000 População'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ])

  return (
    <div className="">
      <Header />

      <div className="max-w-5xl mx-auto flex items-center">
        <div className="">
          <Chart
                width={'600px'}
                height={'500px'}
                chartType="PieChart"
                data={data}
                options={options}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/">
            <div className="transition ease-out flex items-center justify-center w-36 h-36 py-4 px-2 shadow-lg bg-blue-600 rounded-3xl cursor-pointer hover:bg-blue-700 duration-800">
              <p className="text-center text-white font-open-sans text-2xl">ver produtos</p>
            </div>
          </Link>
          <Link href="/admin/produto">
            <div className="transition ease-out flex items-center justify-center w-36 h-36 py-4 px-2 shadow-lg bg-blue-600 rounded-3xl cursor-pointer hover:bg-blue-700 duration-800">
              <p className="text-center text-white font-open-sans text-2xl">criar produto</p>
            </div>
          </Link>
          <Link href="/admin/lote">
            <div className="transition ease-out flex items-center justify-center w-36 h-36 py-4 px-2 shadow-lg bg-blue-600 rounded-3xl cursor-pointer hover:bg-blue-700 duration-800">
              <p className="w-16 text-center text-white font-open-sans text-2xl">criar lote</p>
            </div>
          </Link>          
          <div className="transition ease-out flex items-center justify-center w-36 h-36 py-4 px-2 shadow-lg bg-blue-600 rounded-3xl cursor-pointer hover:bg-blue-700 duration-800">
            <p className="w-16 text-center text-white font-open-sans text-2xl">ver lotes</p>
          </div>
        </div>
      </div>

      <footer className="flex h-32 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-1">
            <p>made by {' '} <a className="text-blue-600 underline" href="https://github.com/huandrey">huandrey</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Home;
