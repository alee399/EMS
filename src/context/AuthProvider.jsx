import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocatStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
 useEffect(() => {
    setLocalStorage()
    setUserData(getLocalStorage()) 
 },[])


 

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider