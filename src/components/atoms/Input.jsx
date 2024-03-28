import React from "react";

const Input = (props) => {
  const {
    typeInput,
    type,
    placeholder,
    onChange,
    value,
    name,
    className,
    icon,
    checked1,
    checked2
  } = props;
  switch (typeInput) {
    case "Search":
      return (
        <input
          type={type}
          className="border-2 border-lightgray bg-white h-[45px] w-full px-5 pr-5 rounded-md text-sm focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );

    case "InputWithIcon":
      return (
        <div className="bg-white border-2 border-secondary h-[50px] w-fulllg:w-[60%]  px-5 pr-5 rounded-md flex justify-center items-center space-x-5">
          {icon}
          <input
            type={type}
            className="w-full h-full text-sm text-darkgray focus:outline-none placeholder:text-secondary"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
      case "InputForm":
      return (
        <div className="flex flex-col gap-2 max-w-6xl w-full">
          <span className=''>{name}</span>
          <Input placeholder={placeholder} className="px-2 py-3 "
              type={type}
              onChange={onChange}
              value={value}
              name={name}/>
        </div>
      );
   
    default:
      return (
        <input
          type={type}
          className={`focus:outline-none border rounded-md focus:border-slate-600 ${className}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
  }
};

export default Input;
