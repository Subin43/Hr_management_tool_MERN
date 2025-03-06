import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className, name, id, ...rest }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      id={id}
      {...rest} // Spread other props (important for react-hook-form)
    />
  );
};

export default Input;
