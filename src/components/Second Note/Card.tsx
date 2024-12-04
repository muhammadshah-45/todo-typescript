import React from 'react'
type CardProps ={
    children:JSX.Element;
    bgColor:string;
    height:string;
    padding:string;
}
const Card = (props:CardProps) => {
  return (
    <div className='card' style={{background:`${props.bgColor}`,height:`${props.height}vh`,padding:`${props.padding}rem`}}>
      {props.children}
    </div>
  )
}

export default Card
