import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { CustomSelect } from '../../components/Select';
import { createProduct, listProducts } from '../../services/product';
import { cleanMoneyFormat, moneyFormatMask } from '../../utils/maskFunctions';

const CreateLote: NextPage = () => {

  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [fields, setFields] = useState({
    quantidade: '', //
  });

  function handleVisibility() {
    setVisible(prev => !prev);
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

  return (
    <div>
      <Modal 
        title='Lote criado' 
        subtitle='Agora voce ja pode visualizar o lote do seu produto.' 
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
          <h2 className="text-2xl font-semibold text-neutral-800 mb-5">Criar Lote</h2>
          <div className="mb-4">
            <CustomSelect items={products} onChange={handleFields} />
          </div>
          <div className="mb-4">
            <label className="font-open-sans block">Quantidade</label>
            <input 
              name="quantidade" 
              onChange={handleFields} 
              value={fields.quantidade}
              type="text" 
              className="w-full font-open-sans py-2 outline-transparent border-b-2 focus:border-blue-600 transition duration-500 linear " />
          </div>
         
          <button type="submit" className="px-5 py-2 mt-4  bg-blue-600 hover:bg-blue-700 rounded-md text-white w-full">criar produto</button>
        </form>
      </div>
    </div>
  )
}

export default CreateLote;