import React from 'react'

const TaskList = ({userData}) => {
  return (
    <div className=' py-5 w-full h-[55%] mt-10 flex gap-5 flex-nowrap justify-start overflow-x-auto scrollHide'>
        {
          userData.tasks.map((task) => {
            return (
              <div className='bg-[#1a355b] h-full w-90 rounded-2xl shrink-0 p-4'>
                <div className='flex justify-between items-start '>
                  <h3 className='bg-amber-600 text-sm font-bold px-2 py-1 rounded-sm'>High</h3>
                  <h4 className='text-sm font-bold'>{task['task date']}</h4>
                </div>
                <div className='mt-5'>
                  <h2 className='text-2xl font-medium'>{task['task title']}</h2>
                  <p className=' mt-2'>{task['task description']}</p>
                </div>
            </div>
            )
          })
        }
    </div>
  )
}

export default TaskList