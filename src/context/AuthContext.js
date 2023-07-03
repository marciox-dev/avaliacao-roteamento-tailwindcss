import React, { createContext } from 'react'
import useAuth from '../hooks/useAuth';



const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const {userLogged, userFull, loading, loginUser, logoutUser } = useAuth();

  if(loading){
    return <h>Loading</h>
  }

  return (
    <AuthContext.Provider value={{userLogged, userFull, loginUser, logoutUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider } 