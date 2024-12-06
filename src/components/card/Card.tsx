import React, { useContext } from 'react'
import './card.css'
import { ThemeContext } from '../../../context/theme/theme';

type CardProps = {
    children:JSX.Element;
    bgColor? :string;
    height: string;
    padding: string;
}
const Card = (props:CardProps) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`card ${theme}`} style={{background:`${props.bgColor}`,height:`${props.height}vh`,
    padding:`${props.padding}rem`}}>
      {props.children}
    </div>
  )
}

export default Card
