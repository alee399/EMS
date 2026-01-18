import React from 'react'
import Header from '../others/Header'
import TaskCards from '../others/TaskCard'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = () => {
  return (
    <div className='p-10 h-screen w-screen'>
        <Header />
        <TaskCards />
        <TaskList />
    </div>
  )
}

export default EmpDashboard