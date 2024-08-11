import React from 'react'
import Navbar from '../molecules/Navbar'
import Button from '../atoms/Button'

const Header = () => {
    return (
        <div className=' px-[9%] h-[95px] bg-[#F6F3FC] border-box w-[100%] flex justify-between items-center ' >
            <div className=" w-[100%] flex gap-[30px] items-center ">
                <div className="logo w-[5%] ">
                    <img src="/assets/images/logo.png" className=' w-[100%] ' alt="" />
                </div>
                <a href="#" className=' text-[15px] font-normal leading-[22px] text-[#2A1454] ' >mail@gerolddesign.com</a>
                <Navbar />
            </div>
            <Button variant='header-button' text='Hire me!' />
        </div>
    )
}

export default Header