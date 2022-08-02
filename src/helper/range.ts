// аналог range()
export const range = (start: number, end: number): ReadonlyArray<number> => {
  const size = end - start;
  const result = [...Array(Math.abs(size)).keys()].map((el) =>
    size > 0 ? el + start : start - el - 1
  );
  return result;
};

// аналог zip(sequience[...])
export const range2d = (
  start1: number,
  end1: number,
  start2: number,
  end2: number
): ReadonlyArray<number[]> => {
  const arr1 = range(start1, end1);
  const arr2 = range(start2, end2);
  const result = [];
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
};
