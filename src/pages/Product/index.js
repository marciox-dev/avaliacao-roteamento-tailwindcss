import React from 'react'

import { useParams } from 'react-router-dom'

const Product = ({ product }) => {

  const { id } = useParams();

  return (
    <>
    <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
      <span className='bg-red-100 border border-red500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hamburguer. { id }</span>
      
      <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={product.imagem} alt='imagem do produto'/>
      <div className='flex flex-col items-center my-3 space-y-2 pb-7'>
    <h1 className='text-gray-900 text-lg'>{product.nome}</h1>
    <p>{product.descricao}</p>
    <h2 className='text-gray-900 text-2xl font-bold'>R$ {product.precoUnitario}</h2>
    <button className='bg-primary text-white px-8 py-2 rounded-full transform transition duration-300 hover:scale-105'>Pedir agora</button>
      </div>
    </div>

    </>
  )
}


export default Product