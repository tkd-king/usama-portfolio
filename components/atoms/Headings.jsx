import React from "react";
import PropTypes from "prop-types";

const Headings = ({ level, text }) => {
  let HeadingStyle = "";

  switch (level) {
    case "1":
      HeadingStyle =
        " capitalize text-[65px] leading-[78px] max font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#2A1454]  ";
      break;
    case "9":
      HeadingStyle = " text-[60px] font-bold text-[#8750F7] leading-[70px] ";
      break;
    case "2":
      HeadingStyle =
        " capitalize text-[45px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#2A1454]  ";
      break;
    case "3":
      HeadingStyle = " capitalize text-[36px] font-bold text-[#2A1454]  ";
      break;
    case "4":
      HeadingStyle =
        " capitalize text-[25px] font-bold text-[#2A1454] leading-[30px] ";
      break;
    case "5":
      HeadingStyle = " capitalize text-[20px] font-light text-[#140C1C] ";
      break;
    case "6":
      HeadingStyle =
        " capitalize text-[20px] font-extrabold text-[#8750F7] leading-[30px] ";
      break;
    case "7":
      HeadingStyle =
        " capitalize text-[18px] text-[#2A1454] font-bold leading-[21px] ";
      break;
    case "8":
      HeadingStyle =
        " capitalize text-[16px] font-normal text-[#8750F7] leading-[24px] ";
      break;
    case "10":
      HeadingStyle =
        " capitalize text-[16px] font-normal text-[#140C1C] leading-[24px] ";
      break;
    case "11":
      HeadingStyle =
        " capitalize text-[14px] font-normal text-[#140C1C] leading-[21px] ";
      break;
    default:
      break;
  }

  return <h2 className={HeadingStyle}> {text} </h2>;
};

Headings.propTypes = {
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Headings;
