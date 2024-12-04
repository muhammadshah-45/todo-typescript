import React, { useState } from 'react'
import { NoteType, Proirity } from '../note/note-type'
import { v4 as uuidv4 } from 'uuid'
import Card from '../card/Card'
import '../note/note.css'
type addNoteProps ={
    addNote:(note:NoteType)=>void
}
const AddNote = (props:addNoteProps) => {
    const [text,setText] = useState("")
    const [proirity,setProirity] = useState<Proirity>('low')
    const [error,setError] = useState("")
    console.log(proirity)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
      e.preventDefault()
      if(text.trim().length === 0){
         setError("please add task")
      }else{
        props.addNote({
            text,
            proirity,
            id:uuidv4(),
        })
        setProirity('low');
        setText("")
        setError('')
      }
        
      
       
    }
    const handleSelect =(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setProirity(e.target.value as Proirity)
    }
  return (
    <div>
      <Card bgColor='purple' padding='1' height='5'>
        
      <form  className='add-note'>
        <input type="text" onChange={handleChange} value={text} name="" id="" />
        <select onChange={handleSelect} value={proirity}>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <button onClick={handleClick}>Add</button>
        {error && <p style={{color:"red"}}>{error}</p> }
      </form>
      </Card>
    </div>
  )
}

export default AddNote
