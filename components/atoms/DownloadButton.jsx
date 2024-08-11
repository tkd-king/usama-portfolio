import { MdOutlineFileDownload } from "react-icons/md";
import "../../app/globals.css"
import React from 'react';

const DownloadButton = () => {
  return (
    <a href=""  data-aos="fade-left" download="" >
        <button className='new-button flex items-center gap-[5px] w-[45%] ' >Download CV <MdOutlineFileDownload className="text-[18px]" /></button>
    </a>
  );
};

export default DownloadButton;
