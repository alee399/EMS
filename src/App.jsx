import React, { useContext, useEffect, useState } from 'react'
import EmpDashboard from './components/Dashboards/EmpDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import Login from './components/Auth/Login'
import {AuthContext} from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null) 
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('loggedInUser')
  //   if(authData){
  //     setUser(loggedInUser.role)
  //   }
  // },[authData])


  const handleLogin = (email, password) => {
    if(authData && authData.admin.email == email && authData.admin.password == password){
      localStorage.setItem('loggedInUser', JSON.stringify({role : 'admin'}))
      setUser('admin')
    }
    else if (authData){
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
      }
    }
    else{
      alert('Invalid credentails!')
    }

  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user ==   'admin' ? <AdminDashboard/> :  user == 'employee' ? <EmpDashboard data={loggedInUserData}/> : ''}
    </>
  )
}

export default App
