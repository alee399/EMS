import React from 'react'
import Header from '../others/Header'
import { CircleArrowLeft } from 'lucide-react'

const AdminDashboard = () => {
  return (
    <div className='w-full h-screen p-10 pb-10'>
        <Header />
        <div className='w-full sm:flex justify-center max-lg:pb-10'>
            <div className='mt-10 sm:w-9/12 h-[88%]  bg-[#131313] p-8 rounded-3xl'>
                <div className='flex gap-2 items-center'>
                    <CircleArrowLeft strokeWidth={1.25} size={35}/>
                    <h1 className='text-3xl font-medium'>Create Task</h1>
                </div>
                <form className='lg:flex gap-10 mt-10'>
                    <div className='flex-1'>
                        <div className='mb-5'>
                            <label className='text-lg font-medium'>Task Tile</label>
                            <br/>
                            <input type="text" placeholder='Make a UI Design' className='p-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none'/>
                        </div>
                        <div className='mb-5'>
                            <label className='text-lg font-medium'>Date</label>
                            <br/>
                            <input type="date" className='p-3 bg-[#1d1d1d] w-full rounded-md mt-3 text-[#8e8d8e] text-md focus:outline-none' />
                        </div>
                        <div  className='mb-5'>
                            <label className='text-lg font-medium'>Assign to</label>
                            <br/>
                            <input type="text" className='p-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none' />
                        </div>
                        <div>
                            <label className='text-lg font-medium'>Category</label>
                            <br/>
                            <input type="text" placeholder='Design, Development, etc' className='p-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-between max-lg:mt-5'>
                        <div>
                            <label className='text-lg font-medium'>Description</label>
                            <br/>
                            <textarea rows={6} type="text" placeholder='Detailed description of Task (Max 500 word)' className='p-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none' />
                        </div>
                        <div className='max-lg:mt-5'>
                            <button className='text-lg w-full font-semibold cursor-pointer px-12 py-2 bg-amber-600 rounded-full'>Create Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard