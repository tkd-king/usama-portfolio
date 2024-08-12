import React, { Children } from "react";

const Container = ({ Children }) => {
  return (
    <div className=" w-[100%] px-[9%] border-box ">
      {" "}
      {Children}{" "}
    </div>
  );
};

export default Container;
