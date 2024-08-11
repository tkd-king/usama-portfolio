import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text, variant }) => {
  let buttonStyle = '';

  switch (variant) {
    case 'header-button':
      buttonStyle = " text-white rounded-[50px] w-[154px] h-[49px] bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-center";
      break;

    default:
      buttonStyle = "w-[154px] h-[49px] text-center";
      break;
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
