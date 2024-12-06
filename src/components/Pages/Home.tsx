import React, { useContext, useState } from "react";

import Note from "../note/Note";
import { Notes } from "../note/data";
import AddNote from "../add-note/AddNote";
import { ThemeContext } from "../../../context/theme/theme";

// import SecondAddNote from "./components/add-note/SecondAddNote";
import {  NoteType, Proirity } from "../note/note-type";
export type NoteProps = {
id:string;
  text: string;
  proirity: Proirity;
  handleEdit:(id:string) => void;
  handleDelete:(id:string) => void;
}

const Home =()=>{
  const [notes,setNotes] = useState(Notes);
  const [mode,setMode] = useState(false);
  const [noteEdit,setNoteEdit] = useState<NoteType | null >(null)
  const theme = useContext(ThemeContext)
  const addNote = (note:NoteType)=>{
    setNotes([note,...notes])
    
  }
  const updateNote = (updatedNote:NoteType)=>{
    const index = notes.findIndex(singleNote=> singleNote.id === updatedNote.id);
    let editedNote =[...notes];
    editedNote.splice(index,1,updatedNote);
    setNotes(editedNote)
    setMode(false)
  }
  const handleEdit =(id:string)=>{
    const note = notes.find(singleNote=>singleNote.id === id)

    setMode(true);
    if(note){
      setNoteEdit(note)
    }
  }
 
  const handleDelete =(id:string)=>{
    //1st way 
    // const filteredArray = notes.filter(singleNote=>singleNote.id !== id);
    // setNotes(filteredArray);
    //2nd way
    let index = notes.findIndex(singleNote => singleNote.id === id);
    let editNotes =[...notes];
    editNotes.splice(index,1);
    setNotes(editNotes)
  }

  
  
  return (
    <>
    <div className={`home ${theme}`}>
      <h1>Notes App[{notes.length> 0 && notes.length}]</h1>

      <AddNote addNote= {addNote} updateNote={updateNote} mode={mode} noteEdit={noteEdit}/>
      {
        notes.map((singleNote)=>{
         return <Note
          proirity={singleNote.proirity} 
          id={singleNote.id} 
          key={singleNote.id} 
          singleNote={singleNote} 
          text={singleNote.text}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          ></Note>
       
        })
      }
    
    </div>
   
    </>
  )
}

export default Home;