import React from 'react'
import Headings from '../atoms/Headings'

export default function CustomerStoriesSection() {
  return (
    <div className='flex gap-8'>
      <div className="flex flex-col">
        <Headings level='2' text="My Client's Stories" />
        <Headings level='8' text="Empowering people in new a digital journey with my super services" />
      </div>
      <div className="">
        {/* {swiper} */}
      </div>
    </div>
  )
}
