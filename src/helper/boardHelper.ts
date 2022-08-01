import ICell from "../types/cell";

const copy = (cells: ICell[][]): ICell[][] => {
  return cells.map((row, i) => {
    return row.map((cell, j) => {
      return { ...cell };
    });
  });
};

export { copy };
