import type { NextPage } from 'next'
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { createProduct } from '../../services/product';
import { cleanMoneyFormat, moneyFormatMask } from '../../utils/maskFunctions';

const CreateProduct: NextPage = () => {

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState({
    name: '', //
    fabricante: '', //
    preco: '',
  });

  function handleVisibility() {
    setVisible(prev => !prev);
  }

  function handleLoading() {
    setLoading(prev => !prev);
  }

  function handleFields(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value})
  }

  function cleanFields() {
    setFields({ ...fields, name: '', fabricante: '', preco: '' })
  }

  console.log(fields);

  async function handleCreateProduct(e) {
    e.preventDefault();
    handleLoading()
    try {
      const response = await createProduct({ 
        ...fields, 
        preco: cleanMoneyFormat(fields.preco)
      });
      cleanFields();
      handleVisibility();
    } catch (err) {
      console.log(err);
    }
    handleLoading();
  }

  return (
    <div>
      <Modal 
        title='Produto criado' 
        subtitle='Agora voce ja pode visualizar seu produto na pagina inicial.' 
        visible={visible}
        setVisible={handleVisibility} 
        type="success"
      >
        <button 
          onClick={handleVisibility}
          className="px-5 py-2 mt-4  bg-blue-600 hover:bg-blue-700 rounded-md text-white w-full"
        >
          voltar
        </button>
      </Modal>
      <Header />

      <div className="w-96 h-full mt-28 px-10 py-12 shadow-lg mx-auto rounded-2xl bg-white">
        <form className="w-full" onSubmit={handleCreateProduct}>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-5">Criar produto</h2>
          <div className="mb-4">
            <label className="font-open-sans block">Nome</label>
            <input 
              name="name" 
              onChange={handleFields} 
              value={fields.name}
              type="text" 
              className="w-full font-open-sans py-2 outline-transparent border-b-2 focus:border-blue-600 transition duration-500 linear " />
          </div>
          <div className="mb-4">
            <label className="block">Fabricante</label>
            <input 
              name="fabricante" 
              onChange={handleFields} 
              value={fields.fabricante}
              type="text" 
              className="w-full font-open-sans py-2 outline-transparent border-b-2 focus:border-blue-600 transition duration-500 linear " />
          </div>
          <div className="mb-4">
            <label className="block">Preco</label>
            <input 
              name="preco" 
              type="text" 
              onChange={handleFields}
              value={moneyFormatMask(fields.preco)}
              className="w-full font-open-sans py-2 outline-transparent border-b-2 focus:border-blue-600 transition duration-500 linear " />
          </div>
          <button 
            type="submit" 
            className="flex justify-center px-5 py-2 mt-4  bg-blue-600 hover:bg-blue-700 rounded-md text-white w-full disabled:bg-slate-400"
            disabled={loading}
            > 
              { loading 
                ? 
                <Oval
                  ariaLabel="loading-indicator"
                  height={18}
                  width={18}
                  strokeWidth={5}
                  color="white"
                  secondaryColor="#e9e9e9"
                />
                : 
                'criar produto' 
              }
            </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct;