import {
  InputProps,
  StyledInputProps,
  TextAreaProps,
} from "@/interfaces/interfaces";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";

function Textarea({ bgColor, id, name, ...rest }: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="label-config">
        {name}
      </label>
      {rest.errorMessage && (
        <label className="text-red-500">{rest.errorMessage}</label>
      )}
      <TextArea
        {...rest}
        bgColor={bgColor}
        id={id}
        className="textarea-config p-2 mt-1 min-h-[200px] rounded-md"
      />
    </div>
  );
}

const TextArea = styled.textarea<StyledInputProps>``;

export default Textarea;
