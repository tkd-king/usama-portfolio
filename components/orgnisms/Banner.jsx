import React from 'react'
import "../../app/globals.css"
import BannerleftSec from '../molecules/BannerleftSec'
import BannerRightSec from '../molecules/BannerRightSec'

const Banner = () => {
    return (
        <div className="outer-banner">
            <div className=' z-10 relative pl-[9%] gap-[90px] banner flex  items-center py-[50px]' >
                <BannerleftSec />
                <BannerRightSec />
            </div>
            <h2 className=' z-0 absolute top-[5%] left-[36%] outlined-text text-[349px] leading-[422px] font-normal   ' >HI</h2>
        </div>
    )
}

export default Banner