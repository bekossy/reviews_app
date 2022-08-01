import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";

const Project = () => {
  return (
    <React.StrictMode>
      <main>
        <React.Fragment>
          <App />
        </React.Fragment>
      </main>
    </React.StrictMode>
  );
};

ReactDom.render(<Project />, document.getElementById("root"));
