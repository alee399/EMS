import React from 'react'
import Header from '../others/Header'
import TaskCards from '../others/TaskCard'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = ({data}) => {
  return (
    <div className='p-10 h-screen w-screen'>
        <Header userData={data}/>
        <TaskCards userData={data}/>
        <TaskList userData={data}/>
    </div>
  )
}

export default EmpDashboard