import React from 'react'
import Card from './Card'

const TaskCards = ({userData}) => {
  console.log(userData)
  return (
    <div className='mt-12'>
        <div className='flex gap-5  justify-between'>
            <Card title={userData.taskNumbers.new} subtitle={'New Task'} bgColor={'#1a355b'}/>
            <Card title={userData.taskNumbers.completed} subtitle={'Completed'} bgColor={'rgb(92 5 34)'}/>
            <Card title={userData.taskNumbers.accepted} subtitle={'Accepted'} bgColor={'rgb(166 50 13)'}/>
            <Card title={userData.taskNumbers.failed} subtitle={'Failed'} bgColor={'rgb(196 117 0)'}/>
        </div>
    </div>
  )
}

export default TaskCards