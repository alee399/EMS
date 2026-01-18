import React from 'react'

const Card = ({title, subtitle, bgColor}) => {
    
  return (
    <div className='w-[45%] flex flex-col px-4 py-6 rounded-xl' style={{background: `${bgColor}`}}>
        <h1 className='text-5xl font-bold mb-3'>{title}</h1>
        <h3 className='text-xl font-medium capitalize'>subtitle</h3>
    </div>
  )
}

export default Card