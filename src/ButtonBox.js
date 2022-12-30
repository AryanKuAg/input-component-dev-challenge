import React from 'react'
import cart from "./assets/cart.svg"

function ButtonBox(props) {
    

  
    const isEnd = props.iconPosition === "end";
  const icon =  <img src={cart} height={props.iconSize} width={props.iconSize} className={`block  ${isEnd ? "ml-4": "mr-4"}`}/>

  return (
    <div className='min-w-[250px] mr-8 mb-12 '>
        <p className='mb-2 text-gray-600 font-medium' style={!props.attribute? {marginBottom: '32px'}: {}}>{props.attribute}</p>
        {!props.iconPosition && <button style={{...props, }} className="font-medium ">{props.text}</button>}
        {props.iconPosition && <button style={{...props, }} className="font-medium flex items-center">{!isEnd? icon: null} <p>{props.text} </p> {isEnd? icon: null} </button>}
    </div>
  )
}

export default ButtonBox