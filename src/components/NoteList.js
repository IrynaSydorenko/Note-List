import React from "react";
import NoteItem from "./NoteItem";
import style from "../UI/myStyles.module.css";

function NoteList({ notes, deleteNote }) {
  return (
    <div className={style.noteList}>
      <ul className={style.unorderedNotesList}>
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <li key={note.id}>
              <NoteItem
                note={note}
                number={index + 1}
                deleteNote={deleteNote}
              />
            </li>
          ))
        ) : notes.length === 0 ? (
          <li className={style.noNotes}>Add your notes</li>
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
}

export default NoteList;
