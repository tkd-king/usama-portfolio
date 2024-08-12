import React from 'react'
import SwiperCumponent from '../molecules/Swiper.molecules'
import Headings from '../atoms/Headings'
  
export default function StoriesCustomorSection() {
  return (
   
    <div className="flex  justify-between bg-[#F6F3FC] px-[70px] py-[100px] ">
      <div className="w-[50%] flex flex-col   ml-12">
        <Headings level='2' text="My Client's Stories"/>
        <Headings level='10' text="Empowering people in new a digital journey with my super services"/>
      </div>
      <div className="w-[50%]">
      <SwiperCumponent />
      </div>
    </div>
    
  )
}
