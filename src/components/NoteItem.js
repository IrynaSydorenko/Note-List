import React from "react";
import style from "../UI/myStyles.module.css";

function NoteItem({ note, number, deleteNote }) {
  return (
    <div className={style.li}>
      <div className={style.id}>{number}.</div>
      <div>{`${note.body[0].toUpperCase()}${note.body.slice(1)}`}</div>
      <button className={style.deleteButton} onClick={() => deleteNote(note)}>
        X
      </button>
    </div>
  );
}

export default NoteItem;
