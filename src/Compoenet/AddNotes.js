import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/NoteContext";

const AddNotes = (props) => {
  const context = useContext(noteContext);
  const {addNote} = context;
  const[note, setNote] = useState({title: "", description: "", tag:""})

   const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag:""});
   }
   const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})

   }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className="my-3 ">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              value = {note.title}
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              value = {note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value = {note.tag}
            />
          </div>
          
          <button disabled={note.description.length < 5}  type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
