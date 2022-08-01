import Colors from "./colors";
import IFigure from "./figure";
import Hints from "./hints";

interface ICell {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly color: Colors;

  hint: Hints | null;
  figure: IFigure | null;
}

export type { ICell };
