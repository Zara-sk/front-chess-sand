import { range } from "../helper/range";
import ICell from "../types/cell";
import { Direction, Directions } from "../types/direction";

// "режет" направление когда встречает любую фигуру
const getCuttedDirection = (
  cells: ICell[][],
  direction: Direction
): Direction => {
  for (let i = 0; i < direction.length; i++) {
    const x = direction[i][0];
    const y = direction[i][1];
    if (cells[x][y].figure != null) return direction.slice(0, i + 1);
  }
  return direction;
};

// направления, коллинеарные базисным векторам
// порядок: up, right, down, left
const getStraightDirections = (x: number, y: number): number[][][] => {
  const directions: Directions = [];
  directions.push(
    range(0, x)
      .map((el) => [el, y])
      .reverse()
  );
  directions.push(range(y + 1, 8).map((el) => [x, el]));
  directions.push(range(x + 1, 8).map((el) => [el, y]));
  directions.push(
    range(0, y)
      .map((el) => [x, el])
      .reverse()
  );
  return directions;
};

// Диагональные направления
// Порядок: UR DR DL UL
const getDiagonalDirections = (x: number, y: number): Directions => {
  const directions: Directions = []; // u r d l
  directions.push(
    range(0, x)
      .map((el) => [el, y])
      .reverse()
  );
  directions.push(range(y + 1, 8).map((el) => [x, el]));
  directions.push(range(x + 1, 8).map((el) => [el, y]));
  directions.push(
    range(0, y)
      .map((el) => [x, el])
      .reverse()
  );
  return directions;
};

export { getStraightDirections, getDiagonalDirections, getCuttedDirection };
