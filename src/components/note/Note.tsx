import React from 'react'
import './note.css'
import {  Color } from './note-type'
import { NoteProps } from '../../App'
import Card from '../card/Card'
import { FaEdit, FaTrash} from 'react-icons/fa'
const Notes = (props:NoteProps) => {
  return (
    <>
    <Card bgColor ={props.proirity && Color[props.proirity]} padding='3' height='5'>
   
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
