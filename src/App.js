import React from "react";
import logo from './logo.svg';
import axios from "axios";
import SearchEngine from "./SearchEngine";
import './App.css';

function App() {
return (
    <div className="App">
      <header className="App-header">
         <h1>Miya's Weather Engine </h1>
            <SearchEngine />
      </header>
      <footer>
        <a href="https://github.com/miya89/weather-react">Open-source code </a>by Miya Peynova
      </footer>
    </div>
  );
}

export default App;
