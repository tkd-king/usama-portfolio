import React, { useState } from 'react';

function Services({ web, app, branding, ui }) {
  const [activeButton, setActiveButton] = useState('branding'); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col  px-[9%] py-[50px] divide-y justify-between bg-[#F6F3FC]">
      <button
        onClick={() => handleButtonClick('branding')}
        className={`px-[25px] font-normal  flex  text-[15px] h-[109px] items-center  ${activeButton === "branding" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white" : ""
          }`}
      >
        <div className="">
        </div>
      </button>
      <button
        onClick={() => handleButtonClick('ui')}
        className={`px-[25px] font-normal text-[#8750F7] flex  text-[15px] h-[109px] items-center  ${activeButton === "ui" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white" : ""
          }`}
      >
        UI/UX
      </button>
      <button
        onClick={() => handleButtonClick('web')}
        className={`px-[25px] font-normal text-[#8750F7] flex  text-[15px] h-[109px] items-center  ${activeButton === "web" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white" : ""
          }`}
      >
        Web
      </button>
      <button
        onClick={() => handleButtonClick('app')}
        className={`px-[25px] font-normal text-[#8750F7] flex  text-[15px] h-[109px] items-center  ${activeButton === "app" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white" : ""
          }`}
      >
        App
      </button>
    </div>
  );
}

export default Services;
