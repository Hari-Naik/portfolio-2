import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputStyle =
  "w-full h-[50px] px-2 bg-[#115173] text-base text-white outline-none";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className="group h-[50px]">
      <input
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        required={type === "email"}
        placeholder={placeholder}
        className={inputStyle}
      />
      <div className="group-hover:animate-progress group-hover:h-[2px] group-hover:bg-[#ffd700]"></div>
    </div>
  );
};

export default Input;
