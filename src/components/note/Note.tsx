import React, { useContext } from 'react'
import './note.css'
import {  ColorDark,ColorLight } from './note-type'
import { NoteProps } from './/note-type'
import Card from '../card/Card'
import { FaEdit, FaTrash} from 'react-icons/fa'
import { ThemeContext } from '../../../context/theme/theme'
const Notes = (props:NoteProps) => {
  const theme = useContext(ThemeContext);
  return (
    <>
    <Card bgColor ={theme=== 'dark' ? props.proirity && ColorDark[props.proirity]: props.proirity && ColorLight[props.proirity]} padding='3' height='5'>
   
   <>
    
     <div style={{margin:"0px"}}>{props.text}</div>
     <div className='right-icons'>
      <FaEdit onClick={()=>props.handleEdit(props.id)}/>
      <FaTrash onClick={()=>props.handleDelete(props.id)}/>

     </div>
   </>
   
    </Card>
    </>
  )
}

export default Notes
