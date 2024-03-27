import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { onClick, className, type, children, to, icon, text } = props;
  switch (type) {
    case "PrimaryButton":
      return (
        <button
          onClick={onClick}
          className={` text-white px-6 py-2 rounded-md flex space-x-3 justify-center items-center text-base lg:text-lg font-semibold hover:bg-secondary hover:border-secondary ${className}`}
        >
          {text}
        </button>
      );
    case "LongPrimaryButtonWithIcon":
      return (
        <button
          onClick={onClick}
          className="flex space-x-3 justify-center items-center bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow"
        >
          {icon}
          <p>{text}</p>
        </button>
      );
    case "OperatorButton":
      return (
        <button
          onClick={onClick}
          className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-3 rounded-md"
        >
          {text}
        </button>
      );
    case "OutlineBorderButton":
      return (
        <button
          onClick={onClick}
          className="px-6 py-2 rounded-md shadow border-2 border-primary bg-white text-primary text-base lg:text-2xl font-semibold hover:bg-secondary hover:text-white hover:border-secondary"
        >
          {text}
        </button>
      );
    case "NavigationOutlineBorderButton":
      return (
        <button
          onClick={onClick}
          className="hover:bg-secondary px-4 py-2 rounded-md shadow bg-white border-primary border-2 text-primary font-semibold hover:text-white hover:border-secondary"
        >
          {text}
        </button>
      );
    case "CardPrimaryButton":
      return (
        <button
          onClick={onClick}
          className="bg-primary hover:bg-secondary px-4 py-2 rounded-md shadow font-semibold text-white"
        >
          {text}
        </button>
      );
    case "CardOutlineButtonWithIcon":
      return (
        <button
          onClick={onClick}
          className={`max-[768px]:px-2 px-4 py-2 rounded-md flex space-x-3 justify-center items-center bg-white border-primary border-2 text-primary font-semibold hover:bg-secondary hover:text-white hover:border-transparent`}
        >
          {icon}
          <p>{text}</p>
        </button>
      );
    case "LinkPrimaryButton":
      return (
        <Link
          to={to}
          className="font-semibold px-6 py-2 bg-primary text-white rounded-md flex space-x-3 justify-center items-center hover:bg-secondary hover:border-secondary hover:text-white"
        >
          {text}
        </Link>
      );
    case "SmallPrimaryButton":
      return (
        <Button
          onClick={onClick}
          className="font-semibold px-6 py-2 bg-primary text-white rounded-md flex space-x-3 justify-center items-center hover:bg-secondary hover:border-secondary hover:text-white"
        >
          {text}
        </Button>
      );
      case "black":
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-black border text-white`}
        >
          <span>{text}</span>
        </a>
      );
      case "ButtonIconCS":
        return <button onClick={onClick} className={`px-2 py-2 rounded-lg flex gap-2  ${className}`}>{icon}</button>;
    case "ButtonIcon":
        return <button onClick={onClick} className={`px-3 py-1 rounded-lg flex gap-2  ${className}`}>{icon}{text}</button>;
    default:
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-white border text-black ${className} `}
        >
          <span>{text}</span>
        </a>
      );
  }
};

export default Button;
