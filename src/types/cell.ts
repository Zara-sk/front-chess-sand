import Colors from "./colors";
import IFigure from "./figure";

interface ICell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;

  hint: Hints | null;
  figure: IFigure | null;
}

export type { ICell };
