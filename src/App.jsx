import React, { useContext, useEffect, useState } from 'react'
import EmpDashboard from './components/Dashboards/EmpDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import Login from './components/Auth/Login'
import {AuthContext} from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null) 
  
  useEffect(() => {
    const userLoginIn = JSON.parse(localStorage.getItem('loggedInUser'))
    if(userLoginIn){
      setUser(userLoginIn.role)
      setLoggedInUserData(userLoginIn.data || null)
    }
  }, [])

  const handleLogin = (email, password) => {
    if(authData.userData && authData.userData.admin.email == email && authData.userData.admin.password == password){
      localStorage.setItem('loggedInUser', JSON.stringify({role : 'admin'}))
      setUser('admin')
    }
    else if (authData.employees){
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data:employee}))
      }
      else{
      alert('Invalid credentails!')
      }
    }

  }
  console.log(loggedInUserData)
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
       {user === "admin" && <AdminDashboard changeUser={setUser}/>}

      {user === "employee" && <EmpDashboard data={loggedInUserData}  changeUser={setUser}/>}
    </>
  )
}

export default App
