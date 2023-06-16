import React, { useState } from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom';


const ProductList = () => {
const [ categoriaTab, setCategoriaTab ] = useState('Hamburguer');

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        {/* Menu de categoria */}
      <div className='flex items-center justify-center space-x-6'>
      <p className={categoriaTab === 'Hamburguer' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Hamburguer')}>Hamburguer</p>
      <p className={categoriaTab === 'Brasileira' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Brasileira')}>Brasileira</p>
      <p className={categoriaTab === 'Japonesa' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Japonesa')}>Japonesa</p>
      <Link to='/ProductList'><p className={categoriaTab === 'Todos' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Todos')}>Todos</p></Link>
      </div>
      {/* lista de produtos */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
      <Link to='/product/1'><Product /></Link>
      <Link to='/product/2'><Product /></Link>
      <Link to='/product/3'><Product /></Link>
      <Link to='/product/4'><Product /></Link>
      <Link to='/product/5'><Product /></Link>
      <Link to='/product/6'><Product /></Link>
      </div>
      <div className='flex items-center justify-center space-x-6 pt-20'>
      </div>
      
    </section>
  )
}

export default ProductList