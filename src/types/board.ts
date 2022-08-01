import ICell from "./cell";
import IFigure from "./figure";
import IMove from "./move";

interface IBoard {
  cells: ICell[][] | [];
  figures: IFigure[] | [];
}

enum BoardActionTypes {
  UPDATE_BOARD_INIT = "UPDATE_BOARD_INIT",
  UPDATE_BOARD_MOVE = "UPDATE_BOARD_MOVE",
  UPDATE_BOARD_BACK = "UPDATE_BOARD_BACK",
  UPDATE_BOARD_HINT = "UPDATE_BOARD_HINT",
}

enum BoardNames {
  DEFAULT = "DEFAULT",
  TEST1 = "TEST1",
  TEST2 = "TEST2",
  TEST3 = "TEST3",
}

interface UpdateBoardInitAction {
  type: BoardActionTypes.UPDATE_BOARD_INIT;
  payload: IBoard;
}

interface UpdateBoardMoveAction {
  type: BoardActionTypes.UPDATE_BOARD_MOVE;
  payload: IMove;
}

interface UpdateBoardBackAction {
  type: BoardActionTypes.UPDATE_BOARD_BACK;
  payload: number; // move number to rollback board state
}

interface UpdateBoardHintAction {
  type: BoardActionTypes.UPDATE_BOARD_HINT;
  payload: { x: number; y: number }; // cell to show hint for
}

type BoardAction =
  | UpdateBoardMoveAction
  | UpdateBoardBackAction
  | UpdateBoardHintAction
  | UpdateBoardInitAction;

export default IBoard;
export { BoardActionTypes, BoardNames };
export type { BoardAction };
