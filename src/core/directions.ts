import { range, range2d } from "../helper/range";
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
  directions.push(range(x, 0).map((el) => [el, y]));
  directions.push(range(y + 1, 8).map((el) => [x, el]));
  directions.push(range(x + 1, 8).map((el) => [el, y]));
  directions.push(range(y, 0).map((el) => [x, el]));
  return directions;
};

// Диагональные направления
// Порядок: UR DR DL UL
const getDiagonalDirections = (x: number, y: number): Directions => {
  const directions: Directions = [];
  directions.push(range2d(x, 0, y + 1, 8).map(([el1, el2]) => [el1, el2]));
  directions.push(range2d(x + 1, 8, y + 1, 8).map(([el1, el2]) => [el1, el2]));
  directions.push(range2d(x + 1, 8, y, 0).map(([el1, el2]) => [el1, el2]));
  directions.push(range2d(x, 0, y, 0).map(([el1, el2]) => [el1, el2]));
  return directions;
};

const getKnightVariants = (x: number, y: number): number[][] => {
  return [
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x + 1, y - 2],
    [x + 1, y + 2],
    [x - 1, y - 2],
    [x - 1, y + 2],
  ];
};

const getKnightDirections = (x: number, y: number): Directions => {
  const directions: Directions = [];
  getKnightVariants(x, y).forEach((v) => {
    if (0 <= v[0] && v[0] <= 7 && 0 <= v[1] && v[1] <= 7) {
      directions.push([v]);
    }
  });
  return directions;
};

const getKingVariants = (x: number, y: number): number[][] => {
  return [
    [x + 1, y + 1],
    [x + 1, y],
    [x + 1, y - 1],
    [x - 1, y + 1],
    [x - 1, y],
    [x - 1, y - 1],
    [x, y - 1],
    [x, y + 1],
  ];
};

const getKingDirections = (x: number, y: number): Directions => {
  const directions: Directions = [];
  getKingVariants(x, y).forEach((v) => {
    if (0 <= v[0] && v[0] <= 7 && 0 <= v[1] && v[1] <= 7) {
      directions.push([v]);
    }
  });
  return directions;
};

export {
  getStraightDirections,
  getDiagonalDirections,
  getCuttedDirection,
  getKnightDirections,
  getKingDirections,
};
