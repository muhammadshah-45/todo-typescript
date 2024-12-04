import React, { useState } from "react";

import Note from "./components/note/Note";
import { Notes } from "./components/note/data";
import AddNote from "./components/add-note/AddNote";
// import SecondAddNote from "./components/add-note/SecondAddNote";
import { NoteProps, NoteType } from "./components/note/note-type";
// import SecondNote from "./components/Second Note/SecondNote";
// import { SecondNoteType } from "./components/note/Type";
function App (){
  const [notes,setNotes] = useState(Notes);
  // const [allnotes,setAllNotes] = useState(Notes)
  const addNote = (note:NoteType)=>{
    setNotes([note,...notes])
    
  }

  // const secondaddNote = (secondnote:SecondNoteType)=>{
  //   setAllNotes([secondnote,...allnotes]);
  // }

  
  
  return (
    <>
    <div className="App">
      <h1>Notes App</h1>

    
      <AddNote addNote= {addNote}/>
      {
        notes.map((singleNote)=>{
         return <Note proirity={singleNote.proirity} key={singleNote.id} singleNote={singleNote} text={singleNote.text}></Note>
       
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