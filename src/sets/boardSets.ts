import { boardFromJSON } from "../core/dataHelper";
import IBoard, { BoardNames } from "../types/board";

const BoardSets = {
  DEFAULT: boardFromJSON(BoardNames.DEFAULT),
  TEST1: boardFromJSON(BoardNames.TEST1),
  TEST2: boardFromJSON(BoardNames.TEST2),
  TEST3: boardFromJSON(BoardNames.TEST3),
};

export default BoardSets;
