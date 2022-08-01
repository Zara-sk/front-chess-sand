import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import IBoard from "../../types/board";
import Cell from "../Cell";
import Figure from "../Figure";

import "./index.scss";

function Board() {
  const board: IBoard = useTypedSelector((state) => state.board);

  return (
    <div className="board">
      {board.cells.map((row) => {
        return row.map((cell) => <Cell cell={cell} key={cell.id} />);
      })}
      {board.figures.map((figure) => {
        return <Figure figure={figure} key={figure.id} />;
      })}
    </div>
  );
}

export default Board;
