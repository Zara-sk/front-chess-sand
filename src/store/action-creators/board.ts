import { BoardAction, BoardActionTypes as types } from "../../types/board";

const move = (): BoardAction => {
  return {
    type: types.UPDATE_BOARD_MOVE,
    payload: {
      from: { x: 1, y: 2 },
      to: { x: 2, y: 3 },
    },
  };
};

export { move };
