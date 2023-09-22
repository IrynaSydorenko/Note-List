import React from "react";
import { useState } from "react";
import styles from "../UI/myStyles.module.css";

function NoteForm({ create }) {
  const [note, setNote] = useState({ body: "" });
  const addNewNote = (e) => {
    e.preventDefault();
    const newNote = {
      ...note,
      id: Date.now(),
    };
    create(newNote);
    setNote({ body: "" });
  };
  return (
    <div>
      <form className={styles.form}>
        <label className={styles.label}>Your Note:</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Write your note here...(up to 100 characters)"
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
          maxLength={100}
        />
        <button className={styles.button} onClick={addNewNote}>
          Create a note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
