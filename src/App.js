import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Jessica Paker and is {""}
          <a
            href="https://github.com/jpaker05/weather-react-app-final"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
