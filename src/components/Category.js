import { Link } from "react-router-dom";
import createImg from "../images/bpurple-d.jpg";
import browseImg from "../images/bred.jpg";

function Category() {
  return (
    <section className="category">
      {/* <h1 className="category__heading">Журнал ошибок</h1>
    <p className="category__caption">Выберите категорию</p> */}
      <Link className="category__link link" to="/error-browser">
        <img src={browseImg} className="category__image" />
        <p className="category__name">Просмотр</p>
      </Link>
      <Link className="category__link link" to="/create-note">
        <img src={createImg} className="category__image" />
        <p className="category__name">Создание</p>
      </Link>
    </section>
  );
}

export default Category;
