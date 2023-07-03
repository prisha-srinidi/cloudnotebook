import React, { useContext, useState } from "react";
import noteContext from "../context/Notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleClick = () => {};

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>add a note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            onChange={onChange}
          />
        </div>
      </div>
      <input
        class="btn btn-primary"
        type="submit"
        onClick={handleClick}
        value="Submit"
      ></input>
    </div>
  );
};

export default AddNote;
