import React from "react";
import HelloWorld from "./components/HelloWorld";
import "./App.css";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div className="App">
      <HelloWorld title="hello world title" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("container") as HTMLElement);
