import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>your notes</h2>
        {notes &&
          notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
      </div>
    </>
  );
}

export default Notes;
