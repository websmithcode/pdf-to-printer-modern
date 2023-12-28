import getPagesNumbers from "./get-pages-numbers";

type mockedPagesArgsType = {
  args: Parameters<typeof getPagesNumbers>;
  expected: ReturnType<typeof getPagesNumbers> | typeof Error;
}[];

const mockedPagesArgs = [
  {
    args: ["1-3,5,7-9"],
    expected: [1, 2, 3, 5, 7, 8, 9],
  },
  {
    args: ["1,2,3"],
    expected: [1, 2, 3],
  },
  {
    args: ["1-3"],
    expected: [1, 2, 3],
  },
  {
    args: ["1-3,5"],
    expected: [1, 2, 3, 5],
  },
  {
    args: ["5,1-3"],
    expected: [5, 1, 2, 3],
  },
  {
    args: ["qwe"],
    expected: Error,
  },
  {
    args: ["1-3,5,7-9,1e+3"],
    expected: Error,
  },
] as mockedPagesArgsType;

describe("getPagesNumbers", () => {
  mockedPagesArgs.forEach(({ args, expected }) => {
    it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
      if (expected === Error) {
        expect(() => getPagesNumbers(...args)).toThrow();
      } else {
        expect(getPagesNumbers(...args)).toEqual(expected);
      }
    });
  });
});
