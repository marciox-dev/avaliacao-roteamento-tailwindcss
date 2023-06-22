import React, { createContext, useEffect, useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom';



const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [ userLogged, setUserLogged ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')

    if (userInfo) {
      setUserLogged(true)
      alert('Uuario logado')
    }else {
      alert('Usuario não logado')
    }
  }, [userLogged])

  const loginUser = async (inputValues) => {

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputValues)
    })
    const data = await response.json();
    console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data))
    navigate('/')
    setUserLogged(true);
  }

  return (
    <AuthContext.Provider value={{userLogged, loginUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider } 