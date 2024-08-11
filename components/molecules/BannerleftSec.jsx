import React from 'react'
import Headings from '../atoms/Headings'
import DownloadButton from '../atoms/DownloadButton'
import SocialIcon from '../atoms/SocialIcon'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";

const BannerleftSec = () => {
    return (
        <div className=' w-[49%] flex flex-col gap-[40px] ' >
            <div className="flex flex-col gap-[15px]">
                <Headings level='3' text='I am Gerold' />
                <Headings level='1' text='Web Developer + UX Designer' />
                <Headings level='5' text='I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people' />
            </div>
            <div className="buttons flex items-center gap-[20px] ">
                <DownloadButton />
                <SocialIcon href='#' icon={<FaFacebookF />} />
                <SocialIcon href='#' icon={<FaLinkedinIn />} />
                <SocialIcon href='#' icon={<IoBasketballOutline />} />
                <SocialIcon href='#' icon={<GrGithub />} />
            </div>
        </div>
    )
}

export default BannerleftSec