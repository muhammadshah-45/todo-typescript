import React from 'react'
import { Props } from '../note/Type'
import './secondnote.css'
import Card from './Card'
const SecondNote = (props:Props) => {
  return (
    <>
    <Card >
      <>
    <div className={`note ${props.proirity}`}>
      <div>{props.text}</div>
    </div>
      </>
    </Card>
    </>
  )
}

export default SecondNote
