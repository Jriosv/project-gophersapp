import PropTypes from "prop-types";
import { DateTime } from "luxon";

export const NoteCard = ({ note, onUpdate }) => {
  const { content, date, important } = note;

  const dateToISO = DateTime.fromISO(date);

  const formattedDate = dateToISO.toLocaleString({
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const handleToggleImportant = () => onUpdate(note);

  return (
    <article>
      <p className="text-lg">{content}</p>
      <div className="flex space-x-2 items-center">
        <small className="text-slate-500 font-semibold">{formattedDate}</small>
        <button
          className={
            "py-1 px-2 rounded-md text-sm text-white font-semibold " +
            (important
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-orange-500 hover:bg-orange-600")
          }
          onClick={handleToggleImportant}
        >
          {important ? "important" : "not important"}
        </button>
      </div>
    </article>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object,
  onUpdate: PropTypes.func,
};
