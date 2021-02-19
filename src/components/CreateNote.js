import CreateNoteForm from "./CreateNoteForm";
import NewMachinePopup from "./NewMachinePopup";

function CreateNote() {
  return (
    <>
      <div className="root__background"></div>
      <section className="new-error sizer spacer">
        <h1 className="section-title">Добавить неисправность</h1>
        <CreateNoteForm />
      </section>
      <NewMachinePopup />
    </>
  );
}

export default CreateNote;
