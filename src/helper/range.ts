export const range = (start: number, end: number): ReadonlyArray<number> => {
  return [...Array(end - start).keys()].map((el) => el + start);
};
