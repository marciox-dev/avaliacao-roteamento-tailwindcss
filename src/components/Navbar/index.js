import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BsFillCartFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
    const { userLogged, userFull, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(`valor do contexto`, userLogged)

    return (
        <header className='bg-white fixed top-0 z-50 w-full' >
            <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
                <div className='flex flex-grow items-center'>
                    <img onClick={() => navigate('/')} src={logo} alt='Logo' className='w-36 cursor-pointer' />
                    <h1 className='text-center text-3x1 font-semibold text-gray-700'>Food App</h1>
                </div>

                {userLogged ? (
                    <div className='flex items-center justify-end space-x-4'>
                        <div className='relative flex cursor-pointer'>
                            <span className='bg-primary w-4 h-4 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2'>2</span>
                            <BsFillCartFill className='w-6 h-6 cursor-pointer '/>
                        </div>
                        <img src='' alt='' />
                        <p className='text-gray-700'>Bem vindo, {userFull.nome}!</p>
                        <Link to='/Admin'>Admin</Link>
                        <img src={userFull.imagem } alt='imagem do usuário' className='w-10 h-10 rounded-full'/>
                        <MdLogout className='w-6 h-6 cursor-pointer' onClick={ logoutUser }/>
                    </div>
                ) : (
                    <div className='flex items-center justify-end space-x-6'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/register'><button className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Register</button></Link>
                </div>
                )}
                
            </nav>
        </header>
    )
}

export default Navbar