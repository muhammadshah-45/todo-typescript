import React, { useState } from 'react'
import { Proirity, secondNoteProps } from '../note/Type'
import {v4 as uuidv4} from 'uuid'
import Card from '../Second Note/Card'

const SecondAddNote = (props:secondNoteProps) => {
  const [text,setText] = useState("")
  const [proirity,setProirity] = useState<Proirity>('low')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }
  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
      setProirity(e.target.value as Proirity);
  }
  const handleClick = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
    e.preventDefault();
    if(text.trim().length === 0){
        alert("Please add task")
    }
    props.secondaddNote({
        text,
        proirity,
        id:uuidv4(),
    })
    
    setText('')
  }
  return (
    <>
    <Card bgColor='purple' height='5' padding='1'>

      <form >
        <input type="text" onChange={handleChange} value={text} name="" id="" />
        <select onChange={handleSelect} value={proirity}  name="" id="">
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <button onClick={handleClick}>Add</button>
      </form>
    </Card>
    </>
  )
}

export default SecondAddNote
