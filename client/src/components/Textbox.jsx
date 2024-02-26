import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && <label htmlFor={name} className="text-slate-800"></label>}

        <div>
          <input type={type} name={name} placeholder={placeholder} ref={ref} />
        </div>
      </div>
    );
  }
);

export default Textbox;
