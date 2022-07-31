import BoardSets from "../../sets/boardSets";
import IBoard, {
  BoardAction,
  BoardActionTypes as types,
} from "../../types/board";

export const boardReducer = (
  state = BoardSets.DEFAULT,
  action: BoardAction
) => {
  switch (action.type) {
    case types.UPDATE_BOARD_INIT:
      return { ...state, ...action.payload };

    case types.UPDATE_BOARD_MOVE:
      return state;

    case types.UPDATE_BOARD_HINT:
      return state;

    case types.UPDATE_BOARD_BACK:
      return state;

    default:
      return state;
  }
};
