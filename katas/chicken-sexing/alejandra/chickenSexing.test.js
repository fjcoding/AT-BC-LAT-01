import { correctness } from "./chickenSexing.js";

test("correctness should find the scoring for guessing chicken sex", () => {
  expect(correctness(["M", "F", "?"], ["M", "F", "?"])).toBe(3);
  expect(correctness(["M", "?", "M"], ["M", "F", "?"])).toBe(2);
  expect(correctness(["F", "M", "F"], ["M", "F", "M"])).toBe(0);
});
