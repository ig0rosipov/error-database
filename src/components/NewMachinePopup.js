function NewMachinePopup() {
  return (
    <section className="new-machine popup">
      <form
        action="#"
        name="newMachineForm"
        className="new-machine__form form"
        noValidate
      >
        <button className="popup__close-button"></button>
        <h2 className="new-machine__heading">Добавить оборудование</h2>
        <div className="new-machine__input-wrapper">
          <input
            type="text"
            id="machine-name"
            className="form__input input"
            autoComplete="off"
            minLength="2"
            placeholder="Название машины"
            required
          />
          <button className="form__submit-button button">Добавить</button>
        </div>
        <span className="input-error machine-name-error"></span>
      </form>
    </section>
  );
}

export default NewMachinePopup;
