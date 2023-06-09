import { InputProps, StyledInputProps } from "@/interfaces/interfaces";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";

function Input({ bgColor, id, name, ...rest }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="label-config">
        {name}
      </label>
      {rest.errorMessage && (
        <label className="text-red-500">{rest.errorMessage}</label>
      )}
      <StyledInput
        type={rest.type}
        {...rest}
        id={id}
        className="input-config"
        bgColor={bgColor}
      />
    </div>
  );
}

const StyledInput = styled.input<StyledInputProps>`
  font-size: 1.125rem;
`;

export default Input;
