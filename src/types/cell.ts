import Colors from "./colors";
import Figure from "./figure";
import Hints from "./hints";

interface ICell {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly color: Colors;

  hint: Hints | null;
  figure: Figure | null;
}

export type { ICell };
