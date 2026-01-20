
import React from 'react'
import Header from '../others/Header'
import TaskCards from '../others/TaskCard'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = (props) => {
  return (
    <div className='p-10 h-screen w-screen'>
        <Header userData={props.data} changeUser={props.changeUser}/>
        <TaskCards userData={props.data}/>
        <TaskList userData={props.data}/>
    </div>
  )
}

export default EmpDashboard