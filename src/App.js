import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { useState, useEffect } from "react";
import "./styles/App.css";
import styles from "./UI/myStyles.module.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  const [notesLoading, setNotesLoadding] = useState(false);

  useEffect(() => {
    let setNotesTimeout;

    const handleSetNotesPromise = async () => {
      setNotesLoadding(true);

      const promise = new Promise((resolve) => {
        setNotesTimeout = setTimeout(() => {
          localStorage.setItem("notes", JSON.stringify(notes));
          resolve(true);
        }, 1500);
      });

      await promise;

      setNotesLoadding(false);
    };

    handleSetNotesPromise();

    return () => clearTimeout(setNotesTimeout);
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
      {notesLoading ? (
        <h2 className={styles.loading}>Loadding...</h2>
      ) : (
        <NoteList notes={notes} deleteNote={deleteNote} />
      )}
    </div>
  );
}

export default App;
