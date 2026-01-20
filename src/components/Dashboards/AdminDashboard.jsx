
import Header from '../others/Header'
import { CircleArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import AllTask from '../others/AllTask';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = (props) => {

    const [taskTitle, setTitle] = useState('')
    const [taskDate, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [taskDescription, setDescription] = useState('')
    const [taskCategory, setCategory] = useState('')

    const userData = useContext(AuthContext)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const newTask = { 
            active: false, 
            completedTask: false, 
            failedTask: false, 
            newTask: true, 
            taskCategory, 
            taskDate, 
            taskDescription, 
            taskTitle
        }

        const updatedEmployees = userData.employees.map(user =>
            user.name === assignTo ? { ...user, tasks: [...user.tasks, newTask], taskNumbers: {...user.taskNumbers, new: user.taskNumbers.new + 1}  } : user
        );

        userData.setEmployees(updatedEmployees)
    
        console.log(userData)
        setTitle('')
        setDate('')
        setAssignTo('')
        setDescription('')
        setCategory('')

    }
  return (
    <div className='w-full h-screen p-10 pb-10'>
        <Header changeUser={props.changeUser}/>
        <div className='mt-5 w-full sm:flex justify-center max-lg:pb-10'>
            <div className=' sm:w-9/12 h-[88%]  bg-[#131313] p-6 rounded-xl'>
                <div className='flex gap-2 items-center'>
                    <CircleArrowLeft strokeWidth={1.25} size={35}/>
                    <h1 className='text-3xl font-medium'>Create Task</h1>
                </div>
                <form className='lg:flex gap-10 mt-8' onSubmit={(e) => {
                    handleSubmitForm(e)
                }}>
                    <div className='flex-1'>
                        <div className='mb-4'>
                            <label className='font-medium text-lg'>Task Tile</label>
                            <br/>
                            <input 
                                type="text" 
                                placeholder='Make a UI Design' 
                                className='px-2 py-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none'
                                value={taskTitle}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='font-medium text-lg'>Date</label>
                            <br/>
                            <input 
                                type="date" 
                                className='px-2 py-3 bg-[#1d1d1d] w-full rounded-md mt-3 text-[#8e8d8e] text-md focus:outline-none' 
                                value={taskDate}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                            />
                        </div>
                        <div  className='mb-4'>
                            <label className='font-medium text-lg'>Assign to</label>
                            <br/>
                            <input 
                                type="text" 
                                className='px-2 py-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none' 
                                value={assignTo}
                                onChange={(e) => {
                                    setAssignTo(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <label className='font-medium text-lg'>Category</label>
                            <br/>
                            <input 
                                type="text" 
                                placeholder='Design, Development, etc' 
                                className='px-2 py-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none' 
                                value={taskCategory}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-between max-lg:mt-5'>
                        <div>
                            <label className='font-medium text-lg'>Description</label>
                            <br/>
                            <textarea 
                                rows={6} 
                                type="text" 
                                placeholder='Detailed description of Task (Max 500 word)' 
                                className='px-2 py-3 bg-[#1d1d1d] w-full rounded-md mt-3 focus:outline-none' 
                                value={taskDescription}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            />
                        </div>
                        <div className='max-lg:mt-5'>
                            <button className='w-full font-semibold cursor-pointer px-12 py-2 bg-amber-600 rounded-full'>Create Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
       <AllTask />  
    </div>
  )
}

export default AdminDashboard