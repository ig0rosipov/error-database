import Error from "./Error";

function ErrorList({ notes, errorsType, currentMachine }) {
  return (
    <>
      {notes.map((note) => {
        if (note.type === errorsType && note.machine === currentMachine) {
          return <Error key={note.id} error={note} />;
        }
      })}
    </>
  );
}

export default ErrorList;
