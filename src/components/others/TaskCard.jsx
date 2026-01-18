import React from 'react'
import Card from './Card'

const TaskCards = () => {
  return (
    <div className='mt-12'>
        <div className='flex gap-5  justify-between'>
            <Card title={'0'} subtitle={'New Task'} bgColor={'#1a355b'}/>
            <Card title={'3'} subtitle={'Completed'} bgColor={'rgb(92 5 34)'}/>
            <Card title={'0'} subtitle={'Accepted'} bgColor={'rgb(166 50 13)'}/>
            <Card title={'1'} subtitle={'Failed'} bgColor={'rgb(196 117 0)'}/>
        </div>
    </div>
  )
}

export default TaskCards