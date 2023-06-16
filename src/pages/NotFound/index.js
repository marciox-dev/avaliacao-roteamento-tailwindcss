import React from 'react'
import { Link } from 'react-router-dom'



const NotFound = () => {
  return (
    <div className='w-64 mx-auto'>
    <h1>404 Not Found</h1>
    <p>Não encontramos nada nesse endereço.</p>
    <span className='flex items-center justify-end space-x-6'>
    <button className='bg-primary px-3 py-2 text-white rounded-full transition duration-700 hover:scale-105'><Link to='/'>Voltar</Link></button>
    </span>
    </div>
  )
}

export default NotFound