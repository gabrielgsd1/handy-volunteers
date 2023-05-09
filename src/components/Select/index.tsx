import React, { HTMLAttributes } from "react";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  id: string;
  divClassname?: string;
  errorMessage?: string;
}

function Select({ name, id, ...rest }: SelectProps) {
  return (
    <div className={`${rest.divClassname} flex flex-col gap-2 outline-none`}>
      <label htmlFor={id} className="label-config">
        {name}
      </label>
      {rest.errorMessage && (
        <label className="text-red-500">{rest.errorMessage}</label>
      )}
      <select {...rest} className={`${rest.className} input-config`} />
    </div>
  );
}

export default Select;
