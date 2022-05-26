import { ShoppingCart, Trash } from "phosphor-react";
import { useState } from "react";
import { moneyFormatMask } from "../utils/maskFunctions";

interface CardData {
  name: string;
  price: string;
  image: string;
  admin?: boolean;
  actions?: any;
}

export function Card({ name, price, image, admin, actions }: CardData) {


  return (
    <div className="flex flex-col justify-between w-56 px-9 py-4 shadow-md rounded-lg hover:shadow-slate-300 cursor-pointer bg-white">
      <img 
        className="w-40 mx-auto"
        src={name.toLowerCase().includes('iphone') ? "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png" : name.toLowerCase().includes('nitro') ? "https://a-static.mlcdn.com.br/800x560/notebook-gamer-acer-nitro-5-intel-core-i7-16gb-512gb-ssd-nvidia-geforce-gtx-1650-4gb-windows-11/magazineluiza/234884100/a715fe70fbdf80c4bd973b8df639f1e5.jpg" : "https://westerrands.websites.co.in/twenty-nineteen/img/defaults/product-default.png" } 
        alt="leite ninho" 
      />
      <section>
        <h4 className="text-neutral-700 text-sm">{name}</h4>
        <p className="text-neutral-700 text-xl font-semibold">R$ {moneyFormatMask(price)}</p>
        <div className="flex items-center gap-5 mt-2">
          <button className="px-5 py-2  bg-blue-600 hover:bg-blue-700 rounded-md text-white w-full">{ admin ? 'editar' : 'comprar'}</button>
          { admin ? (
              <button 
                className="p-2 bg-red-600 hover:bg-red-700 rounded"
                onClick={actions?.delete}
              >
                <Trash size={24} color="white" weight="light" />
              </button>
            ) :
            (
              <button className="p-2 bg-green-600 hover:bg-green-700 rounded">
                <ShoppingCart size={24} color="white" weight="light" />
              </button>
            )
          }
        </div>

      </section>
    </div>
  )
}