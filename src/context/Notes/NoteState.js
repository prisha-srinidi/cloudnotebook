import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64a2adfb70d3136d8f9d6a26",
      user: "64a1bfe57ee2d283a9c58f41",
      title: "myfirstnote",
      description: "dev is easy. just open your eyes",
      tag: "general",
      date: "2023-07-03T11:16:11.294Z",
      __v: 0,
    },
    {
      _id: "64a2ae0070d3136d8f9d6a28",
      user: "64a1bfe57ee2d283a9c58f41",
      title: "myfirstnote",
      description: "dev is easy. just open your eyes",
      tag: "general",
      date: "2023-07-03T11:16:16.712Z",
      __v: 0,
    },
    {
      _id: "64a2ae0170d3136d8f9d6a2a",
      user: "64a1bfe57ee2d283a9c58f41",
      title: "myfirstnote",
      description: "dev is easy. just open your eyes",
      tag: "general",
      date: "2023-07-03T11:16:17.247Z",
      __v: 0,
    },
    {
      _id: "64a2ae0170d3136d8f9d6a2c",
      user: "64a1bfe57ee2d283a9c58f41",
      title: "myfirstnote",
      description: "dev is easy. just open your eyes",
      tag: "general",
      date: "2023-07-03T11:16:17.799Z",
      __v: 0,
    },
    {
      _id: "64a2ae0270d3136d8f9d6a2e",
      user: "64a1bfe57ee2d283a9c58f41",
      title: "myfirstnote",
      description: "dev is easy. just open your eyes",
      tag: "general",
      date: "2023-07-03T11:16:18.317Z",
      __v: 0,
    },
    {
      _id: "64a2ae0270d3136d8f9d6a30",
      user: "64a1bfe57ee2d283a9c58f41",
      title: "myfirstnote",
      description: "dev is easy. just open your eyes",
      tag: "general",
      date: "2023-07-03T11:16:18.949Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //add a note
  const addNote = (title, description, tag) => {
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

  //delete a note

  const deleteNote = () => {};

  //edit a note

  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
