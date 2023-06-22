import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
    const userLogged = useContext(AuthContext);
    console.log(`valor do contexto`, userLogged)

    return (
        <header className='bg-transparent z-50 w-full' >
            <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
                <div className='flex flex-grow items-center'>
                    <Link to='/'><img src={logo} alt='Logo' className='w-36 cursor-pointer' /></Link>
                    <h1 className='text-center text-3x1 font-semibold text-gray-700'>Food App</h1>
                </div>
                <div className='flex items-center justify-end space-x-6'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/register'><button className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Register</button></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar