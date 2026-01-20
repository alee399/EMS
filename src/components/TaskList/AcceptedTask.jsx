import React from 'react'

const AcceptedTask = ({task}) => {
  return (
    <div className='bg-[#8B5CF6] h-full w-90 rounded-2xl shrink-0 p-4'>
        <div className='flex justify-between items-start '>
            <h3 className='bg-amber-600 text-sm font-bold px-2 py-1 rounded-sm'>High</h3>
            <h4 className='text-sm font-bold'>{task.taskDate}</h4>
        </div>
        <div className='mt-5'>
            <h2 className='text-2xl font-medium'>{task.taskTitle}</h2>
            <p className=' mt-2'>{task.taskDescription}</p>
        </div>
        <div className="flex gap-2 text-sm mt-4">
            <button className="px-2 py-1 bg-green-600 rounded text-white">
                Complete
            </button>
            <button className="px-2 py-1 bg-red-600 rounded text-white">
                Fail
            </button>
            <button className="px-2 py-1 bg-blue-600 rounded text-white">
                View
            </button>
        </div>
    </div>
  )
}

export default AcceptedTask