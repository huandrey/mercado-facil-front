import { ShoppingCart } from "phosphor-react";
import { moneyFormatMask } from "../utils/maskFunctions";

interface CardData {
  name: string;
  price: string;
  image: string;
}

export function Card({ name, price, image }: CardData) {
  return (
    <div className="w-56 px-9 py-4 shadow-md rounded-lg hover:shadow-slate-300 cursor-pointer bg-white">
      <img 
        className="w-40 mx-auto"
        src="https://drogariaglobo.vteximg.com.br/arquivos/ids/305846/Leite-Ninho-Instantaneo-Fibras-380G.jpg?v=637831369614430000" 
        alt="leite ninho" 
      />
      <section>
        <h4 className="text-neutral-700 text-sm">{name}</h4>
        <p className="text-neutral-700 text-xl font-semibold">R$ {moneyFormatMask(price)}</p>
        <div className="flex items-center gap-5 mt-2">
          <button className="px-5 py-2  bg-blue-600 hover:bg-blue-700 rounded-md text-white w-full">comprar</button>
          <button className="p-2 bg-green-600 hover:bg-green-700 rounded"><ShoppingCart size={24} color="white" weight="light" /></button>
        </div>

      </section>
    </div>
  )
}