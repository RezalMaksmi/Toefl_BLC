import React from "react";

const Text = (props) => {
  const { className, text, maxLength, type, subText } = props;
  switch (type) {
    case "header":
      return (
        <>
          <h1 className="font-bold text-[30px] lg:text-[50px] text-darkgray">
            {text}
          </h1>
          <div className="border-b border-[3px] border-lightgray w-full mb-10" />
        </>
      );
    case "hero-header":
      return (
        <>
          <div className="font-bold text-3xl lg:text-5xl text-darkgray my-7 ">
            {text}
          </div>
          <div className="text-base lg:text-2xl  w-full text-grayCS ">
            {subText}
          </div>
        </>
      );
    case "card-title":
      return (
        <div className="font-semibold text-lg text-darkgray line-clamp-1">
          {text}
        </div>
      );
    case "card-desc":
      return (
        <div className="font-medium text-grayCS text-sm line-clamp-2">
          {text}
        </div>
      );
    case "card-price":
      return (
        <div className="font-semibold text-md lg:text-lg text-darkgray mb-3">
          {text}
        </div>
      );
    case "card-category":
      return (
        <div className="font-normal bg-secondary text-xs lg:text-xs text-white py-1 px-2 mb-2 inline-block rounded-md">
          {text}
        </div>
      );
    case "card-rating":
      return <div className="text-darkgray font-medium text-sm">{text}</div>;
    case "dolar":
      const shortenedDolar =
        text.length > maxLength ? text.slice(0, maxLength) + "" : text;

      return <div className={className}>{shortenedDolar}</div>;
    default:
      return <div className={className}>{text}</div>;
  }
};

export default Text;
