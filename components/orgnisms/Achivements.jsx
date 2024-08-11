import React from 'react'
import Achive from '../molecules/Achive'

const Achivements = () => {
  return (
    <div className='flex px-[9%] pt-[70px] pb-[60px] justify-between items-center ' >
        <Achive number='14' text='Years of Experience' />
        <Achive number='50+' text='Project Completed' />
        <Achive number='1.5K' text='Happy Clients' />
        <Achive number='14' text='Years of Experience' />
    </div>
  )
}

export default Achivements