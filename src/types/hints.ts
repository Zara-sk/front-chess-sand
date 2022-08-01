enum Hints {
  NO = "no",
  SELECTED = "selected",
  PREVIOUS = "previous",
  MOVE = "move",
  ATTACK = "attack",
  CHECK = "check",
  CHECKMATE = "checkmate",
}

interface IHint {
  x: number;
  y: number;
  hint: Hints;
}

export { Hints };
export default IHint;
