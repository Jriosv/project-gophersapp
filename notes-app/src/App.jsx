import { useEffect, useState } from "react";

import { NoteSection } from "./components";
import { getAll, update, create } from "./services/notes";

import "./styles/main.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [updateNote, setUpdateNote] = useState({});
  const [error, setError] = useState("");

  const handleNewNote = (e) => setNewNote(e.target.value);

  const handleUpdateNote = (note) => {
    const copyUpdateNote = {
      ...note,
      important: !note.important,
    };
    console.log({ copyUpdateNote });

    setError("");

    update(note.id, copyUpdateNote)
      .then(setUpdateNote)
      .catch((e) => {
        console.error(e);
        setError(e.response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createNote = {
      content: newNote,
      important: false,
    };

    setError("");

    create(createNote)
      .then((newNote) => setNotes([...notes, newNote]))
      .catch((e) => {
        console.log(e);
        setError(e.response.data);
      });

    setNewNote("");
  };

  useEffect(() => {
    getAll().then(setNotes);
  }, [updateNote]);

  return (
    <main className="flex justify-center items-center p-10">
      <div className=" space-y-4">
        <h1 className="text-4xl font-bold">
          Welcome to Notes
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            App
          </span>{" "}
          📝
        </h1>

        <NoteSection notes={notes} onUpdate={handleUpdateNote} />

        <form className="flex space-x-2" onSubmit={handleSubmit}>
          <input
            className="bg-slate-100 w-100 border-solid border-2 border-slate-200 rounded-md px-2 py-1"
            type="text"
            placeholder="Add a new note"
            onChange={handleNewNote}
            value={newNote}
          />
          <button className="font-semibold px-2 py-1 bg-green-500 text-white rounded-md">
            Add note
          </button>
        </form>
        {error && <strong>{error}</strong>}
      </div>
    </main>
  );
};

export default App;
