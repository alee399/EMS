import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocatStorage'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  const [employees, setEmployees] = useState([])

  // ✅ Run ONCE on app start
  useEffect(() => {
    const storedData = getLocalStorage()

    if (!storedData) {
      setLocalStorage()               // seed default data ONCE
      const freshData = getLocalStorage()
      setUserData(freshData)
      setEmployees(freshData.employees)
    } else {
      setUserData(storedData)
      setEmployees(storedData.employees)
    }
  }, [])

  // ✅ Sync employees back to localStorage
  useEffect(() => {
    if (!userData) return

    const updatedData = {
      ...userData,
      employees
    }

    localStorage.setItem('users', JSON.stringify(updatedData))
    setUserData(updatedData)
  }, [employees])



  return (
    <AuthContext.Provider value={{ userData, employees, setEmployees }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
