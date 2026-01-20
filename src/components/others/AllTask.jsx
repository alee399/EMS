import React, { useState, useRef, useEffect, useContext } from 'react'
import {ChevronDown, ChevronUp } from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [open, setOpen] = useState(false);
    const detailsRef = useRef(null);

    const handle = () => {
      setOpen(prev => !prev);
      };

     // Auto scroll when dropdown opens
     useEffect(() => {
     if (open && detailsRef.current) {
        setTimeout(() => {
        detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
        }, 150);
        }
    }, [open]);

    const authData = useContext(AuthContext)
  return (
    <div>
       <div className="mt-5 flex justify-center">
        <button
          onClick={handle}
          className="flex items-center gap-2 cursor-pointer px-4 py-1.5 text-sm font-medium text-zinc-300
          border border-zinc-700 rounded-lg 
          hover:bg-orange-500 hover:text-white hover:border-orange-500 
          transition-all duration-200 ease-in-out"
        >
          View Details
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      <div
        id='taskList'
        ref={detailsRef}
        className={`
          mt-5 bg-[#131313] p-5 rounded-xl
          overflow-y-auto  transition-all duration-500 ease-in-out
          ${open
            ? "max-h-100 opacity-100 translate-y-2"
            : "h-0 opacity-0 -translate-y-2"}
        `}
      >
        <div className='flex gap-5 bg-[#1E293B] text-[#38BDF8] px-5 py-3 font-medium rounded-md'>
            <div className='w-1/5'>Name</div>
            <div className='w-1/5'><h3>New Task</h3></div>
            <div className='w-1/5'>Active</div>
            <div className='w-1/5'>Completed</div>
            <div className='w-1/5'>Failed</div>
        </div>
        {
            authData.userData.employees.map((emp, idx) => {
                return <div key={idx} className="border-2 border-[#2D2D2D] flex px-5 py-3 rounded-md font-medium mt-5 gap-5">
                        <div className='w-1/5'><h3>{emp.name}</h3></div>
                        <div className='w-1/5 text-[#3B82F6] font-bold'><h3>{emp.taskNumbers.new}</h3></div>
                        <div className='w-1/5 text-[#F59E0B] font-bold'><h3>{emp.taskNumbers.active}</h3></div>
                        <div className='w-1/5 text-[#10B981] font-bold'><h3>{emp.taskNumbers.completed}</h3></div>
                        <div className='w-1/5 text-[#F43F5E] font-bold'><h3>{emp.taskNumbers.failed}</h3></div>
                    </div>
            })
        }    
      </div>  
    </div>
  )
}

export default AllTask