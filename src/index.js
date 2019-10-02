import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import MainTable from "./components/MainTable";

function App() {
  return (
    <div className="App">
      <MainTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
