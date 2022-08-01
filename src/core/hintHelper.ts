import { copy } from "../helper/boardHelper";
import { ICell } from "../types/cell";
import IFigure, { Figures } from "../types/figure";
import Hints from "../types/hints";
import { basicMoveRuleDispatcher } from "./moveRules";

// внутрненняя функция для расставления подсказок
const arrangeHints = (figure: IFigure) => {};

// аккумулирование доски
const putHints = (cells: ICell[][], hints: number[][]) => {};

const CellsWithoutHints = (cells: ICell[][]): ICell[][] => {
  return cells.map((row) => {
    return row.map((cell) => {
      return { ...cell, hint: Hints.NO };
    });
  });
};

// внешняя функция для взаимодействия
// если в указанной клетке есть фигура, то подсказки
// показываются, в противном случае - убираются
const toggleHintsOnCells = (
  currentCells: ICell[][],
  x: number,
  y: number
): ICell[][] => {
  const figure = currentCells[x][y].figure;
  if (!figure) {
    return CellsWithoutHints(currentCells);
  } else {
    const directions = basicMoveRuleDispatcher(figure);
    const cells = copy(currentCells);
    directions.forEach((direction) =>
      direction.forEach((pos) => {
        cells[pos[0]][pos[1]].hint = Hints.SELECTED;
      })
    );
    return cells;
  }
};

export { toggleHintsOnCells };
