import React from "react";

export default function FormTextarea({ name, label, placeholder, ...rest }) {
  return (
    <div className="inputs mt-2">
    <div className="inputbox">
      <label htmlFor="">{label}</label>

      <textarea 
        id={name}
        name={name}
        className=""
        placeholder={placeholder}
        {...rest}
      />

    </div>
     </div>
  );
}
