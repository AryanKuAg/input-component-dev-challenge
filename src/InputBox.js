import React from "react";
import call from "./assets/call.svg";
import lock from "./assets/lock.svg";
import "./InputBox.css";

function InputBox(props) {
//   const isEnd = props.icon.position === "end";
//   const icon = (
//     <img
//       src={isEnd ? lock : call}
//       height={props.iconSize}
//       width={props.iconSize}
//       className={`block  ${isEnd ? "ml-4" : "mr-4"}`}
//     />
//   );

  return (
    <div className="min-w-[250px] mr-16 mb-4">
      <p
        className="mb-2 text-gray-600 font-medium"
        style={
          !props.attribute
            ? {
                marginBottom: "32px",
              }
            : {}
        }
      >
        {props.attribute}
      </p>
      <div className="flex flex-col">
        <label
          className="mb-1"
          style={{
            ...props.label,
          }}
        >
          {props.label.text}
        </label>
        <input
          type={props.input.type}
          style={{
            ...props.input,
          }}
          className="my__input "
          placeholder={props.input.placeholder}
          value={props.input?.value}
        />
        <p
          className="mb-2 mt-1 text-gray-600 font-medium"
          style={
            !props?.bottomText
              ? {
                  marginTop: "32px",
                }
              : { ...props?.bottomText }
          }
        >
          {props?.bottomText?.text}
        </p>
      </div>
    </div>
  );
}

export default InputBox;

// {!props.iconPosition && <button style={{...props, }} className="font-medium ">{props.text}</button>}
//           {props.iconPosition && <button style={{...props, }} className="font-medium flex items-center">{!isEnd? icon: null} <p>{props.text} </p> {isEnd? icon: null} </button>}
