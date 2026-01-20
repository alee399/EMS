import React from 'react'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import AcceptedTask from './AcceptedTask'
import FailedTask from './FailedTask'

const TaskList = ({userData}) => {
  return (
    <div className=' py-5 w-full h-[55%] mt-10 flex gap-5 flex-nowrap justify-start overflow-x-auto scrollHide'>
        {
          userData.tasks.map((task, idx) => {
            if(task.newTask === true){
              return <NewTask key={idx} task={task}/>
            }
            else if(task.completedTask === true){
              return <CompletedTask key={idx} task={task}/>
            }
            else if(task.active === true){
              return <AcceptedTask key={idx} task={task}/>
            }
            else if(task.failedTask === true){
              return <FailedTask key={idx} task={task}/>
            }
          })
        }
    </div>
  )
}

export default TaskList