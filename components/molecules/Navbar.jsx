import React from 'react'
import Anchors from '../atoms/Anchors'

const Navbar = () => {
  return (
    <div className=' flex gap-[25px] ' >
        <Anchors level='1' text='services' />
        <Anchors level='1' text='work' />
        <Anchors level='1' text='resume' />
        <Anchors level='1' text='skills' />
        <Anchors level='1' text='testimonials' />
        <Anchors level='1' text='contact' />
    </div>
  )
}

export default Navbar