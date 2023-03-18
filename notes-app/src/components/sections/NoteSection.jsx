import PropTypes from 'prop-types'

import { NoteCard } from '../cards'

export const NoteSection = ({ notes, onUpdate }) => {
  return (
    <section>
      <ol>
        {notes.map(note => (
          <li key={note.id}>
            <NoteCard note={note} onUpdate={onUpdate} />
          </li>
        ))}
      </ol>
    </section>
  )
}

NoteSection.propTypes = {
  notes: PropTypes.array,
  onUpdate: PropTypes.func
}
