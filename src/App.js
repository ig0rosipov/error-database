import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ErrorBrowser from './components/ErrorBrowser'
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import Background from './components/Background';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Background />
          <Header />
          <Route exact path="/">
            <section className="category">
              <h1 className="category__heading">Журнал ошибок</h1>
              <p className="category__caption">Выберите категорию</p>
              <div className="category__links">
                <Link className="category__link button" to="/error-browser">Просмотр</Link>
                <Link className="category__link button" to="/create-note">Создание</Link>
              </div>
            </section>
          </Route>
          <Route path="/error-browser">
            <ErrorBrowser />
          </Route>
          <Route path="/create-note">
            <CreateNote />
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
