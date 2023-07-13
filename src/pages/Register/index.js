import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { registerUser } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [inputValues, setInputValues] = useState({
    nome: '',
    email: '',
    senha: '',
    imagem: ''
  })

  const navigate = useNavigate();

  const handleChangeValues = (evento) => {

    setInputValues({
      ...inputValues,
      [evento.target.name]: evento.target.value
    })
    console.log(inputValues)
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const response = await registerUser(inputValues);
    if (response.data) {
      alert(`Usuário ${response.data.nome} cadastrado com sucesso!`);
      navigate('/login')
    }
  }

  return (
    <main className='h-screen w-full banner pt-28'>
      <div className='flex pt-20 flex-col items-center h-screen'>
        <img src={logo} alt="logotipo do food app" className='w-52' />
        <h1 className='text-2x1 text-gray-600'>Cadastro do Usuário</h1>
        <form onSubmit={handleSubmit} className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'>
          <div className='flex flex-col space-y-6'>
            <input type='text'
              name='nome'
              placeholder='Digite o seu nome'
              className='w-full px-3 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border-gray-800 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <input type='email'
              name='email'
              placeholder='Digite o seu e-mail'
              className='w-full px-3 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border-gray-800 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <input type='password'
              name='senha'
              placeholder='Digite a sua senha'
              className='w-full px-3 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border-gray-800 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <input type='text'
              name='imagem'
              placeholder='Insira a URL da imagem'
              className='w-full px-3 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border-gray-800 focus:shadow-xl'
              onChange={handleChangeValues}
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              CADASTRAR
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register