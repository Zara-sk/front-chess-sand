import { range } from "../helper/range";
import { Direction, Directions } from "../types/direction";

const cutDirection = (direction: Direction) => {};

const getStraightDirections = (x: number, y: number): number[][][] => {
  // направления, коллинеарные базисным векторам
  // порядок: up, right, down, left
  const directions = [];
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

const getDiagonalDirections = (x: number, y: number): Directions => {
  // Диагональные направления
  // Порядок: UR DR DL UL
  const directions = []; // u r d l
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

export { getStraightDirections, getDiagonalDirections };
