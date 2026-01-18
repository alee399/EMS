import React, { useState } from 'react'
import { CircleUser, LockKeyhole } from 'lucide-react'
const Login = () => {
    const [pasVal, setPasVal] = useState('')
    let showBtn = false
    if(pasVal.length > 0){
      showBtn = true  
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-1/3 bg-[#131313] text p-8  min-h-8/12 rounded-2xl flex flex-col justify-between items-center '>
            <h1 className='text-3xl font-semibold'>Sign In</h1>
            <form id='myForm' className='text-gray-300 w-full'>
                <div className='flex border-2 border-amber-700 items-center px-3 py-3 rounded-full mt-6'>
                    <CircleUser size={18}/>
                    <input 
                        type="email" 
                        placeholder='Email'  
                        className='ml-2 focus:outline-none'
                    />
                </div>
                <div className='flex border-2 border-amber-700 justify-between items-center px-3 py-3 rounded-full mt-6'>
                    <div className='flex items-center'>
                        <LockKeyhole size={18}/>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='ml-2 focus:outline-none'
                            onChange={(e) => {
                                setPasVal(e.target.value)
                            }}
                        />
                    </div>
                    <p className='pr-2' style={pasVal ? {display : 'block'} : {display : 'none'}}>Show</p>
                </div>
                <div className='flex justify-between px-4 mt-5 text-sm'>
                    <div className='flex '>
                    <input type="checkbox" className='accent-amber-600 w-3.5'/>
                    <p className='ml-2'>Remember me</p>
                    </div>
                    <p className='text-amber-600'>Forget Password</p>
                </div>
            </form>
            <div className='flex justify-center mb-5'>
                <button type='submit' form='myForm' className='text-lg w-full font-semibold cursor-pointer px-12 py-2 bg-amber-600 rounded-full'>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Login