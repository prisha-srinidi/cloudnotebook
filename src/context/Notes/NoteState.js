import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMWJmZTU3ZWUyZDI4M2E5YzU4ZjQxIn0sImlhdCI6MTY4ODMyMjA1MH0.RBaldezNbCBM8VAFIubdznZmFxzXynidGpkGUaQXYy8",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    console.log("adding a new note");
    const note = {
      _id: "64a2ae0270d3136d8f9d6a30",
      user: "64a1bfe57ee2d283a9c58f41",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-03T11:16:18.949Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  //get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMWJmZTU3ZWUyZDI4M2E5YzU4ZjQxIn0sImlhdCI6MTY4ODMyMjA1MH0.RBaldezNbCBM8VAFIubdznZmFxzXynidGpkGUaQXYy8",
      },
    });
    const json = response.json();
    console.log(json);
    setNotes(json);
  };

  //delete a note

  const deleteNote = (id) => {
    console.log("deleting the node with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMWJmZTU3ZWUyZDI4M2E5YzU4ZjQxIn0sImlhdCI6MTY4ODMyMjA1MH0.RBaldezNbCBM8VAFIubdznZmFxzXynidGpkGUaQXYy8",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
