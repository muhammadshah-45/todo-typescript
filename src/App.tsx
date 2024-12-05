import React, { useState } from "react";
import './App.css'
import Note from "./components/note/Note";
import { Notes } from "./components/note/data";
import AddNote from "./components/add-note/AddNote";
// import SecondAddNote from "./components/add-note/SecondAddNote";
import {  NoteType, Proirity } from "./components/note/note-type";
export type NoteProps = {
id:string;
  text: string;
  proirity: Proirity;
  handleEdit:(id:string) => void;
  handleDelete:(id:string) => void;
}

function App (){
  const [notes,setNotes] = useState(Notes);
  // const [allnotes,setAllNotes] = useState(Notes)
  const [mode,setMode] = useState(false);
  const [noteEdit,setNoteEdit] = useState<NoteType | null >(null)
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
  console.log(noteEdit)
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
  // const secondaddNote = (secondnote:SecondNoteType)=>{
  //   setAllNotes([secondnote,...allnotes]);
  // }

  
  
  return (
    <>
    <div className="App dark">
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
      {/* <SecondAddNote secondaddNote = {secondaddNote} ></SecondAddNote>
      {
        allnotes.map((singleNoted)=>{
          return(
            <SecondNote singleNoted = {singleNoted} proirity={singleNoted.proirity} key={singleNoted.id} text={singleNoted.text} />

          ) 
        })
      } */}
    </div>
   
    </>
  )
}

export default App;