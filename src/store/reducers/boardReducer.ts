import IBoard, {
  BoardAction,
  BoardActionTypes as types,
} from "../../types/board";

const initialState: IBoard = {
  cells: [],
};

export const boardReducer = (state = initialState, action: BoardAction) => {
  switch (action.type) {
    case types.UPDATE_BOARD_INIT:
      return state;

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
