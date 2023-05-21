import React, { FormHTMLAttributes } from "react";

function Form(props: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      className={`bg-[#111] shadow-md p-6 rounded-lg ${props.className}`}
    />
  );
}

export default Form;
