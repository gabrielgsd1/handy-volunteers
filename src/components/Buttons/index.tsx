import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`text-black bg-custom-green px-6 py-2 rounded-md hover:bg-custom-dark-green hover:scale-105 duration-150 border disabled:bg-gray-500 disabled:border-inherit border-custom-green ${
        props.className
      } ${props.loading && "bg-[rgb(17,65,36)] pointer-events-none"}`}
    >
      {props.loading ? (
        <Div className="border-4 w-8 h-8 rounded-[50%] m-auto border-black border-l-transparent"></Div>
      ) : (
        props.children
      )}
    </button>
  );
}

const Div = styled.div`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Button;
