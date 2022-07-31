import BoardSets from "../../sets/boardSets";
import IBoard, {
  BoardAction,
  BoardActionTypes as types,
} from "../../types/board";
import IMove from "../../types/move";

const initBoard = (board: IBoard = BoardSets.DEFAULT): BoardAction => {
  return {
    type: types.UPDATE_BOARD_INIT,
    payload: board,
  };
};

const makeMove = (move: IMove): BoardAction => {
  return {
    type: types.UPDATE_BOARD_MOVE,
    payload: move,
  };
};

export { initBoard, makeMove };
