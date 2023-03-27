import React from "react";

export default function FormInput({ name, label, placeholder, ...rest }) {
  return (
    <>
      <div className="inputbox mt-2">
      <label htmlFor="">{label}</label>
      <input
        id={name}
        name={name}
        className=""
        placeholder={placeholder}
        {...rest}
      />
    </div>
    </>
  
  );
}
