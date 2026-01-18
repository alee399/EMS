import React from 'react'

const TaskList = () => {
  return (
    <div className=' py-5 w-full h-[55%] mt-10 flex gap-5 flex-nowrap justify-start overflow-x-auto scrollHide'>
        <div className='bg-[#1a355b] h-full w-90 rounded-2xl shrink-0 p-4'>
            <div className='flex justify-between items-start '>
              <h3 className='bg-amber-600 text-sm font-bold px-2 py-1 rounded-sm'>High</h3>
              <h4 className='text-sm font-bold'>20 Feb 2024</h4>
            </div>
            <div className='mt-5'>
              <h2 className='text-2xl font-medium'>Ek Aur Task</h2>
              <p className=' mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laboriosam culpa libero odit rerum impedit.</p>
            </div>
        </div>
        <div className=' bg-[#5c0522] h-full w-90 rounded-2xl shrink-0 p-4'>
            <div className='flex justify-between items-start '>
              <h3 className='bg-amber-600 text-sm font-bold px-2 py-1 rounded-sm'>High</h3>
              <h4 className='text-sm font-bold'>20 Feb 2024</h4>
            </div>
            <div className='mt-5'>
              <h2 className='text-2xl font-medium'>Ek Aur Task</h2>
              <p className=' mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laboriosam culpa libero odit rerum impedit.</p>
            </div>
        </div>
        <div className='bg-[#a6320d] h-full w-90 rounded-2xl shrink-0 p-4'>
            <div className='flex justify-between items-start '>
              <h3 className='bg-amber-600 text-sm font-bold px-2 py-1 rounded-sm'>High</h3>
              <h4 className='text-sm font-bold'>20 Feb 2024</h4>
            </div>
            <div className='mt-5'>
              <h2 className='text-2xl font-medium'>Ek Aur Task</h2>
              <p className=' mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laboriosam culpa libero odit rerum impedit.</p>
            </div>
        </div>
        <div className='bg-[#c47500] h-full w-90 rounded-2xl shrink-0 p-4'>
            <div className='flex justify-between items-start '>
              <h3 className='bg-amber-600 text-sm font-bold px-2 py-1 rounded-sm'>High</h3>
              <h4 className='text-sm font-bold'>20 Feb 2024</h4>
            </div>
            <div className='mt-5'>
              <h2 className='text-2xl font-medium'>Ek Aur Task</h2>
              <p className=' mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laboriosam culpa libero odit rerum impedit.</p>
            </div>
        </div>
    </div>
  )
}

export default TaskList