import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import ErrorList from "./ErrorList";
import notes from "../data/notes.json";
import machines from "../data/machines.json";

function ErrorBrowser() {
  const electrical = {
    text: "Электрика",
    tag: "electrical",
  };
  const mechanical = {
    text: "Механика",
    tag: "mechanical",
  };
  const { path, url } = useRouteMatch();

  const [currentMachine, setCurrentMachine] = React.useState(machines[0].name);
  const handleMachineSelect = (e) => {
    setCurrentMachine(e.currentTarget.value);
  };
  return (
    <section className="error-browser sizer">
      <div className="error-browser__type-selector">
        <Link className="button" to={`${url}/electrical`}>{electrical.text}</Link>
        <Link className="button" to={`${url}/mechanical`}>{mechanical.text}</Link>
      </div>

      <h1 className="section-title">Обзор ошибок</h1>
      <select className="select" onChange={handleMachineSelect}>
        {machines ? (
          machines.map((machine) => {
            return <option key={machine.id}>{machine.name}</option>;
          })
        ) : (
          <option disabled>no data</option>
        )}
      </select>
      <Route path={`${path}/electrical`}>
        <ErrorList
          notes={notes}
          errorsType={electrical.text}
          currentMachine={currentMachine}
        />
      </Route>
      <Route path={`${path}/mechanical`}>
        <ErrorList
          notes={notes}
          errorsType={mechanical.text}
          currentMachine={currentMachine}
        />
      </Route>
    </section>
  );
}

export default ErrorBrowser;
