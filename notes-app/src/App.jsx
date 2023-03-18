import { useEffect, useState } from 'react'

import { NoteSection } from './components'
import { getAll, update, create }  from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [updateNote, setUpdateNote] = useState({})
  const [error, setError] = useState('')

  const handleNewNote = (e) => setNewNote(e.target.value)

  const handleUpdateNote = (note) => {
    const copyUpdateNote = {
      ...note,
      important: !note.important
    }
    console.log({ copyUpdateNote });
  
    setError('')

    update(note.id, copyUpdateNote)
      .then(setUpdateNote)
      .catch(e => {
        console.error(e);
        setError(e.response.data.error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const createNote = {
      content: newNote,
      important: false
    }

    setError('')

    create(createNote)
      .then(newNote => setNotes([...notes, newNote]))
      .catch(e => {
        console.log(e);
        setError(e.response.data)
      })

    setNewNote('')
  }
  
  useEffect(() => {
    getAll()
      .then(setNotes)
  }, [updateNote])

  return (
    <main>
      <h2>Notas | 📝</h2>

      <NoteSection notes={notes} onUpdate={handleUpdateNote} />

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNewNote} value={newNote} />
        <button>Crear nota</button>
      </form>
      {error && (<strong>{error}</strong>)}
    </main>
  )
}

export default App