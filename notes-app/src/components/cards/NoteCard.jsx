import PropTypes from 'prop-types'

export const NoteCard = ({ note, onUpdate }) => {
  const { content, date, important } = note

  const handleToggleImportant = () => onUpdate(note)

  return (
    <article>
      <p>{content}</p>
      <small>{date}</small>
      <span>  ----  </span>
      <button onClick={handleToggleImportant}>
        {important ? 'important' : 'not important'}
      </button>
    </article>
  )
}

NoteCard.propTypes = {
  note: PropTypes.object,
  onUpdate: PropTypes.func
}