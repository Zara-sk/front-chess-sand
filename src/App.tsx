import React from "react";
import Board from "./components/Board";

import "./zero.scss";
import "./App.scss";
import { useActions } from "./hooks/useActions";
import BoardSets from "./sets/boardSets";

function App() {
  const { initBoard } = useActions();
  return (
    <div className="app">
      <Board />

      {/* sets for testing */}
      <div className="tests">
        <button onClick={() => initBoard(BoardSets.DEFAULT)}>
          Стандартная позиция
        </button>
        <button onClick={() => initBoard(BoardSets.TEST1)}>
          Тестовая позиция [1]
        </button>
        <button onClick={() => initBoard(BoardSets.TEST2)}>
          Тестовая позиция [2]
        </button>
        <button onClick={() => initBoard(BoardSets.TEST3)}>
          Тестовая позиция [3]
        </button>
      </div>
    </div>
  );
}

export default App;
