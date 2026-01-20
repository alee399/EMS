import React from 'react'
import Task from './Task'

const TaskCards = ({userData}) => {
  return (
    <div className='mt-12'>
        <div className='flex gap-5  justify-between'>
            <Task title={userData.taskNumbers.new} subtitle={'New Task'} bgColor={'#3B82F6'}/>
            <Task title={userData.taskNumbers.completed} subtitle={'Completed'} bgColor={'#10B981'}/>
            <Task title={userData.taskNumbers.accepted} subtitle={'Accepted'} bgColor={'#8B5CF6'}/>
            <Task title={userData.taskNumbers.failed} subtitle={'Failed'} bgColor={'#EF4444'}/>
        </div>
    </div>
  )
}

export default TaskCards