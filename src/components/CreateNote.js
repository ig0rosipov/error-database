import CreateNoteForm from "./CreateNoteForm";
import NewMachinePopup from "./NewMachinePopup";

function CreateNote() {
  return (
    <>
      <div className="root__background"></div>
      <main className="main sizer">
        <CreateNoteForm />
      </main>
      <NewMachinePopup />
      <footer className="footer">
        <p className="footer__author">IO, 2020</p>
      </footer>
    </>
  );
}

export default CreateNote;
