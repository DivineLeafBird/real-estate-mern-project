import React from "react";

const Button1 = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue px-4 py-2 rounded-full text-white cursor-pointer hover:bg-darkblue md:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110"
    >
      {" "}
      {text}
    </div>
  );
};

export default Button1;
