import React from 'react'
import Header from '../others/Header'
import { CircleArrowLeft } from 'lucide-react'

const AdminDashboard = () => {
  return (
    <div className='w-full h-screen p-10'>
        <Header />
        <div className='mt-10'>
            <div className='flex gap-2 items-center'>
                <CircleArrowLeft strokeWidth={1.25} size={35}/>
                <h1 className='text-3xl font-medium'>Create Task</h1>
            </div>
            <form>

                <label>Task Tile</label>
                <br/>
                <input type="text" placeholder='Make a UI Design'/>
                <br/>
                <label>Date</label>
                <br/>
                <input type="date" />
                <br/>
                <label>Assign to</label>
                <br/>
                <input type="text" />
                <br/>
                <label>Category</label>
                <br/>
                <input type="text" placeholder='Design, Development, etc'/>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard