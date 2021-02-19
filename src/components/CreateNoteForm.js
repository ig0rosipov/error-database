function CreateNoteForm() {
  return (
    <form action="#" name="addFaultForm" className="form" noValidate>
      <ul className="form__container">
        <li className="form__field form__field_spaced">
          <label>
            <h3 className="form__field-name">Выберите оборудование</h3>
            <select name="" id="#" className="form__select select">
              <option value="" className="form__option">
                Lorem Ipsum
              </option>
              <option value="" className="form__option">
                Lorem Ipsum
              </option>
              <option value="" className="form__option">
                Lorem Ipsum
              </option>
            </select>
            <button className="form__add-machine-button">
              Добавить оборудование
            </button>
          </label>
        </li>
        <li className="form__field form__field_spaced">
          <label>
            <h3 className="form__field-name">Выберите тип неисправности</h3>
            <select name="" id="" className="form__select select">
              <option value="" className="form__option">
                Механика
              </option>
              <option value="" className="form__option">
                Электрика
              </option>
            </select>
          </label>
        </li>
        <li className="form__field form__field_spaced">
          <label>
            <h3 className="form__field-name">Наименование неисправности</h3>
            <textarea
              id="fault-name"
              className="form__textarea input textarea"
              rows="1"
              minLength="2"
              placeholder="Введите название"
              required
            ></textarea>
            <span className="input-error fault-name-error">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              maxime.
            </span>
          </label>
        </li>
        <li className="form__field form__field_spaced">
          <label>
            <h3 className="form__field-name">Описание неисправности</h3>
            <textarea
              id="fault-description"
              className="form__textarea input textarea"
              rows="1"
              minLength="2"
              placeholder="Опишите неисправность"
              required
            ></textarea>
            <span className="input-error fault-description-error"></span>
          </label>
        </li>
        <li className="form__field form__field_spaced">
          <label>
            <h3 className="form__field-name">Варианты решения</h3>
            <textarea
              id="fault-solve"
              className="form__textarea input textarea"
              rows="1"
              minLength="2"
              placeholder="Как можно исправить?"
              required
            ></textarea>
            <span className="input-error fault-solve-error"></span>
          </label>
        </li>
        <li className="form__field form__field_spaced">
          <label>
            <h3 className="form__field-name">Выберите изображение</h3>
            <div className="form__fake-input button" tabIndex="0">
              Выбрать
            </div>
            <input type="file" className="form__image-input hidden" />
          </label>
        </li>
      </ul>

      <button className="form__submit-button button spacer">Отправить</button>
    </form>
  );
}

export default CreateNoteForm;
