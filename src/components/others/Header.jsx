import React from 'react'

const Header = ({userData}) => {
  return (
    <div className='flex justify-between min-h-18 items-end'>
        <div>
            <h1 className='text-2xl font-semibold'>Hello, <br/><span className='text-3xl capitalize'>{userData.name} 👋</span></h1>
        </div>
        <div>
            <button className='px-6 py-2 bg-amber-600 font-lg font-bold rounded'>Log Out</button>
        </div>
    </div>
  )
}

export default Header