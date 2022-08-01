import IBoard, { BoardNames } from "../types/board";
import sets from "../sets/boardSets.json";
import Colors from "../types/colors";
import Figure, { Figures, FigureLetters } from "../types/figure";
import ICell from "../types/cell";
import IFigure from "../types/figure";
import { Hints } from "../types/hints";

const fetchFigure = (x: number, y: number, letter: string): Figure | null => {
  switch (letter) {
    case "x":
      return null;
    default:
      return {
        x,
        y,
        id: Math.random(),
        figure: FigureLetters[letter.toLocaleUpperCase()],
        color: /[A-Z]/.test(letter) ? Colors.WHITE : Colors.BLACK,
      };
  }
};

const fetchCell = (x: number, y: number, figure: IFigure | null): ICell => {
  return {
    x: x,
    y: y,
    id: x * 10 + y,
    color: (x + y) % 2 ? Colors.BLACK : Colors.WHITE,
    hint: Hints.NO,
    figure: figure,
  };
};

export const boardFromJSON = (jsonBoardName: BoardNames): IBoard => {
  const data = sets[jsonBoardName];

  const cells: ICell[][] = [];
  const figures: IFigure[] = [];

  data.forEach((row: string[], i: number) => {
    const boardRow: ICell[] = [];
    row.forEach((el: string, j: number) => {
      const figure = fetchFigure(i, j, el);
      boardRow.push(fetchCell(i, j, figure));
      figure && figures.push(figure);
    });
    cells.push(boardRow);
  });

  const board = {
    cells: cells,
    figures: figures,
  };

  return board;
};
