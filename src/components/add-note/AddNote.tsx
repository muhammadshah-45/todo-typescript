import React, { useContext, useEffect, useState } from 'react'
import { NoteType, Proirity } from '../note/note-type'
import { v4 as uuidv4 } from 'uuid'
import Card from '../card/Card'
import '../note/note.css'
import { ThemeContext } from '../../../context/theme/theme'
type addNoteProps ={
    addNote:(note:NoteType)=>void
    mode:boolean;
    noteEdit:NoteType | null;
    updateNote:(note:NoteType) => void
}
const AddNote = (props:addNoteProps) => {
    const [text,setText] = useState("")
    const [proirity,setProirity] = useState<Proirity>('low')
    const [error,setError] = useState("")
    const theme = useContext(ThemeContext);
   
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        
        setText(e.target.value)
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
      e.preventDefault()
      if(text.trim().length === 0){
         setError("*please add task")
      }else{
        if(props.mode){
        // updated exist task
         props.noteEdit && props.updateNote({
              text,
              proirity,
              id:props.noteEdit?.id,
          })
          setProirity('low');
          setText("")
          setError('')
        } else{
          //add new task
          props.addNote({
            text,
            proirity,
            id:uuidv4(),
        })
      }
      setProirity('low');
      setText("")
      setError('')
      }
       
    }
    const handleSelect =(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setProirity(e.target.value as Proirity)
    }
    const noteContent = (note:NoteType)=>{
      setText(note.text);
      setProirity(note.proirity)
    } 

    useEffect(()=>{
      if( props.noteEdit && props.mode){
        noteContent(props.noteEdit)
        
      }
    },[props.mode,props.noteEdit])

  return (
    <div>
      <Card bgColor={theme === 'dark' ? "#333" :'#ddd'} padding='1' height='5'>
        
      <form  className='add-note'>
        <input type="text" onChange={handleChange} value={text} name="" id="" />
        <select onChange={handleSelect} value={proirity}>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <button onClick={handleClick}>{props.mode ? "Edit" : "Add"}</button>
        {error && <p style={{color:"red"}}>{error}</p> }
      </form>
      </Card>
    </div>
  )
}

export default AddNote
