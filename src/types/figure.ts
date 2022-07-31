import Colors from "./colors";

enum Figures {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

const FigureLetters: { [key: string]: Figures } = {
  R: Figures.ROOK,
  N: Figures.KNIGHT,
  B: Figures.BISHOP,
  Q: Figures.QUEEN,
  K: Figures.KING,
  P: Figures.PAWN,
};

interface IFigure {
  readonly id: number;

  x: number;
  y: number;
  figure: Figures;
  color: Colors;
}

export default IFigure;
export { Figures, FigureLetters };
