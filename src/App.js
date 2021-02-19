import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorBrowser from "./components/ErrorBrowser";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Background from "./components/Background";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        {/* <Header /> */}
        <div className="testq frosted">
        <Header />
          <main className="main">
            <Route exact path="/">
              <Category />
            </Route>
            <Route path="/error-browser">
              <ErrorBrowser />
            </Route>
            <Route exact path="/create-note">
              <CreateNote />
            </Route>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
