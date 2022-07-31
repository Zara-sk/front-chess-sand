import { boardFromJSON } from "../core/dataHelper";
import IBoard, { BoardNames } from "../types/board";

const BoardSets = {
  DEFAULT: boardFromJSON(BoardNames.DEFAULT),
};

export default BoardSets;
