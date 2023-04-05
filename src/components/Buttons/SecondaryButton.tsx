import React, { ButtonHTMLAttributes } from "react";

function SecondaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`text-[#eee] outline outline-custom-green outline-2 px-6 py-2 rounded-md hover:outline-custom-dark-green duration-150 ${props.className}`}
    />
  );
}

export default SecondaryButton;
