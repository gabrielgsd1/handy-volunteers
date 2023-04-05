import { InputProps } from "@/interfaces/interfaces";
import React from "react";
import ReactInputMask from "react-input-mask";

interface MaskedInputProps extends InputProps {
  mask: string;
}

function MaskedInput({ mask, id, name, ...rest }: MaskedInputProps) {
  return (
    <div className="flex flex-col gap-2 outline-none">
      <label htmlFor={id} className="label-config">
        {name}
      </label>
      <ReactInputMask
        {...rest}
        mask={mask}
        id={id}
        maskChar={null}
        className={`${rest.className} input-config`}
      />
    </div>
  );
}

export default MaskedInput;
