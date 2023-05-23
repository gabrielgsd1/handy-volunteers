import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

function SecondaryButton(props: Props) {
  if (props.loading)
    return (
      <Div className="h-8 w-8 rounded-[50%] border-4 border-l-transparent border-custom-green"></Div>
    );
  return (
    <button
      {...props}
      className={`text-[#eee] outline outline-custom-green outline-2 px-6 py-2 rounded-md hover:outline-custom-dark-green duration-150 hover:scale-105 ${props.className}`}
    />
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
export default SecondaryButton;
