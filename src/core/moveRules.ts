import ICell from "../types/cell";
import Colors from "../types/colors";
import { Direction, Directions } from "../types/direction";
import IFigure, { Figures } from "../types/figure";
import IHint, { Hints } from "../types/hints";
import {
  getCuttedDirection,
  getDiagonalDirections,
  getStraightDirections,
} from "./directions";

const cellHintDispathcer = (
  figure: IFigure,
  hintedFigure: IFigure | null,
  x: number,
  y: number
): IHint => {
  if (!hintedFigure) {
    return {
      x,
      y,
      hint: Hints.MOVE,
    };
  } else {
    // let hint: Hints;
    // switch (hintedFigure) {
    // }
    return {
      x,
      y,
      hint: Hints.ATTACK,
    };
  }
};

// [это база]
// базисные направления - потенциально возможные направления без
// учета находящийся на поле фигур, основываясь лишь на координатах
// и типе фигур
// для пешки имеет значение ее цвет
const basicMoveRuleDispatcher = (figure: IFigure): Directions => {
  const x = figure.x; // row
  const y = figure.y; // column

  switch (figure.figure) {
    case Figures.ROOK:
      return getStraightDirections(x, y);

    case Figures.KNIGHT:
      return [];

    case Figures.BISHOP:
      return getDiagonalDirections(x, y);

    case Figures.QUEEN:
      return [];

    case Figures.KING:
      // получаем directions возможные для хода
      // получаем directions, откуда может идти шах
      // оставляем те, где он будет
      // вычитаем
      return [];

    case Figures.PAWN:
      return [];
  }
};

// основываясь на базисных направлениях, строит возможные ходы,
// обрезая и конкретизируя их с помощью <Hints>
const boardMoveRuleDispatcher = (
  cells: ICell[][],
  figure: IFigure
): IHint[] => {
  const basicDirections: Directions = basicMoveRuleDispatcher(figure);
  const directions: Directions = basicDirections.map((direction: Direction) => {
    return getCuttedDirection(cells, direction);
  });

  const hints: IHint[] = [];
  directions.forEach((direction: Direction) => {
    direction.forEach((pos) => {
      hints.push(
        cellHintDispathcer(figure, cells[pos[0]][pos[1]].figure, pos[0], pos[1])
      );
    });
  });

  // всегда добавляем выбранную фигуру
  hints.push({
    x: figure.x,
    y: figure.y,
    hint: Hints.SELECTED,
  });

  return hints;
};

export { boardMoveRuleDispatcher };
