import React from "react";
import "./App.css";
import api from "./services/api";
import Card from "./components/pages/data/Card";

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <h3>ÚLTIMAS MOVIMENTAÇÕES</h3>
      </div>
      <Card />
      <div className="footer">
        <h3>VER EXTRATO COMPLETO</h3>
      </div>
    </div>
  );
}

export default App;
