import PropTypes from "prop-types";

import { NoteCard } from "../cards";

export const NoteSection = ({ notes, onUpdate }) => {
  return (
    <section className="py-4 px-4 bg-slate-200">
      <ol className="flex flex-col space-y-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="p-4 bg-slate-50 rounded-md hover:bg-blue-50"
          >
            <NoteCard note={note} onUpdate={onUpdate} />
          </li>
        ))}
      </ol>
    </section>
  );
};

NoteSection.propTypes = {
  notes: PropTypes.array,
  onUpdate: PropTypes.func,
};
