import { User, UserCircle } from "phosphor-react";

export function Header() {
  return (
    <header className="bg-blue-600">
      <div className="flex justify-between p-5 max-w-5xl mx-auto">
      <div className="space-x-5">
        <h1 className="font-open-sans text-xl text-white">
          mercado-facil
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-open-sans text-white">Olá, usuário!</p>
        <UserCircle size={32} color="#ffffff" />
      </div>
      </div>
    </header>
  )
}
