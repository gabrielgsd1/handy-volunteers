import { HTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    StyledInputProps {
  id: string;
  name: string;
}

export interface StyledInputProps {
  bgColor?: string;
  textColor?: string;
}
