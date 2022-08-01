import Colors from "../types/colors";
import { Directions } from "../types/direction";
import IFigure, { Figures } from "../types/figure";
import { getDiagonalDirections, getStraightDirections } from "./directions";

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
      return [];

    case Figures.PAWN:
      return [];
  }
};

// основываясь на базисных направлениях, строит возможные ходы,
// обрезая и конкретизируя их с помощью <Hints>
const boardMoveRuleDispatcher = () => {};

export { basicMoveRuleDispatcher };
