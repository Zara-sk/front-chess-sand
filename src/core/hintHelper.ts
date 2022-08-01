import { copy } from "../helper/boardHelper";
import ICell from "../types/cell";
import { Directions } from "../types/direction";
import IFigure, { Figures } from "../types/figure";
import IHint, { Hints } from "../types/hints";
import { boardMoveRuleDispatcher } from "./moveRules";

// аккумулирование доски
const CellsWithHints = (cells: ICell[][], figure: IFigure): ICell[][] => {
  const hints: IHint[] = boardMoveRuleDispatcher(cells, figure);
  const clearedCells = CellsWithoutHints(cells);
  hints.forEach((hint: IHint) => {
    clearedCells[hint.x][hint.y].hint = hint.hint;
  });

  return clearedCells;
};

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
  cells: ICell[][],
  x: number,
  y: number
): ICell[][] => {
  const figure = cells[x][y].figure;

  if (!figure || cells[x][y].hint == Hints.SELECTED) {
    return CellsWithoutHints(cells);
  } else {
    return CellsWithHints(cells, figure);
  }
};

export { toggleHintsOnCells };
