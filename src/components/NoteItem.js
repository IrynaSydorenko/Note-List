import React from "react";
import style from "../UI/myStyles.module.css";

function NoteItem({ note, number, deleteNote }) {
  return (
    <li className={style.li}>
      <span className={style.noteNumberAndNote}>
        <span className={style.id}>{number}.</span>
        <p>{`${note.body[0].toUpperCase()}${note.body.slice(1)}`}</p>
      </span>
      <button className={style.deleteButton} onClick={() => deleteNote(note)}>
        X
      </button>
    </li>
  );
}

export default NoteItem;
