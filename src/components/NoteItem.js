import React from "react";
import style from "../UI/myStyles.module.css";

function NoteItem({ note, number, deleteNote }) {
  return (
    <p className={style.li}>
      <span className={style.id}>{number}.</span>
      <div>{`${note.body[0].toUpperCase()}${note.body.slice(1)}`}</div>
      <button className={style.deleteButton} onClick={() => deleteNote(note)}>
        X
      </button>
    </p>
  );
}

export default NoteItem;
