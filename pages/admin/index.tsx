import type { NextPage } from 'next'
import Link from 'next/link'
import {
  Eye,
  Storefront,
  CaretDown,
  PlusCircle,
  UserCircle,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import Dashcard from '../../components/Dashcard'
import { Header } from '../../components/Header'
import { moneyFormatMask } from '../../utils/maskFunctions'

interface Product {
  id: string
  name: string
  fabricante: string
  price: string
}

const Home: NextPage = () => {
  const [totalProducts, setTotalProducts] = useState('0')

  useEffect(() => {
    setTotalProducts(localStorage.getItem('total_products') || '0')
  }, [])
  const [options, setOptions] = useState({
    title: 'Gráfico de vendas',
    backgroundColor: '#F5F5F5',
  })
  const [optionsBar, setOptionsBar] = useState({
    title: 'Gráfico de Barra',
  })
  const [data, setData] = useState([
    ['Produtos', 'Quantidade'],
    ['iPhone 12', 100],
    ['SmartTV', 80],
    ['Batata Frita', 50],
  ])
  const [dataBar, setDataBar] = useState([
    ['Cidades', '2010 População', '2000 População'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ])

  return (
    <div className="flex flex-initial">
      <div className="min-h-screen w-64 bg-gradient-to-r from-zinc-800 to-zinc-800">
        <div className="flex flex-col items-center gap-2 py-6">
          <UserCircle size={64} color="#ffffff" />
          <p className="font-open-sans text-lg text-white">Olá, Monitor!</p>
        </div>
        {/* <Link href="/"> */}
        <div className="duration-800 h-14 cursor-pointer overflow-hidden border-b border-slate-700 py-4 transition duration-1000 ease-out hover:h-44">
          <p className="flex items-center gap-4 pb-2 font-open-sans text-xl text-white px-4">
            <Storefront size={24} color="#ffffff" weight="light" />
            <p className="flex items-center gap-8 w-32">
              Produtos
            </p>
            <button className="">
                <CaretDown size={24} color="#ffffff" weight="regular" />
            </button>
          </p>
          <div className="transition flex items-center gap-2 px-4 hover:bg-slate-800 ease duration-400">
            <PlusCircle size={20} color="#ffffff" weight="light" />
            <Link href="/admin/product">
              <p className="py-4 font-open-sans text-lg text-white">
                Criar produtos
              </p>
            </Link>
          </div>
          <div className="transition flex items-center gap-2 px-4 hover:bg-slate-800 ease duration-400">
            <Eye size={20} color="#ffffff" weight="light" />
            <Link href="/admin/products">
              <p className="py-4 font-open-sans text-lg text-white">
                Ver produtos
              </p>
            </Link>
          </div>
        </div>
        <div className="duration-800 h-14 cursor-pointer overflow-hidden border-b border-slate-700 py-4 transition duration-1000 ease-out hover:h-44">
          <p className="flex items-center gap-4 pb-2 font-open-sans text-xl text-white px-4">
            <Storefront size={24} color="#ffffff" weight="light" />
            <p className="flex items-center w-32">
              Lotes
            </p>
            <button>
              <CaretDown size={24} color="#ffffff" weight="regular" />
            </button>
          </p>
          <div className="transition flex items-center gap-2 px-4 hover:bg-slate-800 ease duration-400">
            <PlusCircle size={20} color="#ffffff" weight="light" />
            <Link href="/admin/lote">
              <p className="py-4 font-open-sans text-lg text-white">
                Criar lotes
              </p>
            </Link>
          </div>
          <div className="transition flex items-center gap-2 px-4 hover:bg-slate-800 ease duration-400">
            <Eye size={20} color="#ffffff" weight="light" />
            {/* <Link href="/admin/lotes"> */}
              <p className="flex gap-2 items-center py-4 font-open-sans text-lg text-white">
                Ver lotes <p className="font-open-sans text-sm">(not work yet)</p>
              </p>
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="flex gap-4 px-14 py-24">
        <Dashcard
          color="blue"
          title={`${totalProducts} Produtos Cadastrados`}
        />
        <Dashcard color="violet" title={`0 Produtos Vendidos`} />
        <Dashcard color="green" title={`0 Lotes Cadastrados`} />
      </div>
      {/* <Header /> */}

      {/* <div className="max-w-5xl mx-auto flex items-center">
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
          <Link href="/admin/product">
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
      </footer> */}
    </div>
  )
}

export default Home
