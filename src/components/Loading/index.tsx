import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Div
      className={`w-12 h-12 rounded-[50%] border-4 border-custom-green border-l-transparent`}
    ></Div>
  );
}

const Div = styled.div`
  animation: anim 800ms linear infinite;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;

  @keyframes anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
