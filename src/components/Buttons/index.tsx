import React, { ButtonHTMLAttributes } from "react";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`text-black bg-custom-green px-6 py-2 rounded-md hover:bg-custom-dark-green hover:scale-105 duration-150 ${props.className}`}
    />
  );
}

export default Button;
