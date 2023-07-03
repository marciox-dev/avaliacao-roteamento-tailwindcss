import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";

import { findAllCategories } from '../../services/categoryService';
import { findProductById, updateProductById } from '../../services/productService';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productForm, setProductForm] = useState({
        nome: "",
        descricao: "",
        precoUnitario: 0,
        imagem: "",
        codigoBarra: ""
    });

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        getCategories();
        getProductById();
    }, [id])

const getProductById = async () => {
   const response = await findProductById(id);
   setProductForm(response.data);
}

    
    const getCategories = async () => {
        const response = await findAllCategories();
        const categoriesSelect = response.data.map((categoria) => {
            return {
                value: categoria._id,
                label: categoria.nome
            }
        })
        setCategories(categoriesSelect);
    }

    const handleChangeValues = (evento) => {

        setProductForm({
            ...productForm,
            [evento.target.name]: evento.target.value
        })
        console.log(productForm)
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log(productForm)
        const response = await updateProductById(id, productForm)

        if(response){
            alert('Produto editado com sucesso');
            navigate('/admin');
        }
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-6'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-2x1 text-gray-600'>Edição de Produtos</h1>
            </div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1- mt-6'>
                <div className='flex flex-col space-y-4'>
                    <label htmlFor='nome' className='text-gray-500'>Nome</label>
                    <input type='text'
                        id='nome'
                        name='nome'
                        value={productForm.nome}
                        required
                        onChange={handleChangeValues}
                        className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus'></input>

                    <label htmlFor='descricao' className='text-gray-500'>Descrição</label>
                    <textarea 
                    name='descricao' 
                    id='descricao' 
                    cols='30' rows='5' 
                    value={productForm.descricao}
                    onChange={handleChangeValues} 
                    required 
                    className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus'></textarea>

                    <label htmlFor='codigoBarra' className='text-gray-500'>Código de Barras</label>
                    <input type='text'
                        id='codigoBarra'
                        name='codigoBarra'
                        value={productForm.codigoBarra}
                        required
                        onChange={handleChangeValues}
                        className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus'></input>
                </div>

                <div className='flex flex-col space-y-4 ml-3' >
                    <label htmlFor='preco' className='text-gray-500'>Preço</label>
                    <input type='text'
                        id='preco'
                        name='precoUnitario'
                        value={productForm.precoUnitario}
                        required
                        onChange={handleChangeValues}
                        className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus'></input>

                    <label htmlFor='imagem' className='text-gray-500'>Imagem</label>
                    <input type='text'
                        id='imagem'
                        name='imagem'
                        value={productForm.imagem}
                        required
                        onChange={handleChangeValues}
                        className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus'></input>

                    <label htmlFor='title' className='text-gray-500'>Categoria</label>
                    <MultiSelect
                        options={categories}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                    <div className='mt-8'>
                        <button type='submit' className='flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Editar</button>
                    </div>

                </div>
            </form>
        </section>
    )
}

export default EditProduct