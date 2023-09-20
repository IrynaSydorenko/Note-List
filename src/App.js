import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { useState, useEffect } from "react";
import "./styles/App.css";
import styles from "./UI/myStyles.module.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (transferedNote) => {
    setNotes(notes.filter((note) => note.id !== transferedNote.id));
  };
  return (
    <div className="App">
      <h1 className={styles.h1}>This is your Note List</h1>
      <NoteForm create={createNewNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
