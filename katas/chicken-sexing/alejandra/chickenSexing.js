export function correctness(bobsDecisions, expertDecisions) {
  let score = 0;
  for (let i = 0; i < bobsDecisions.length; i++) {
    if (bobsDecisions[i] === expertDecisions[i]) {
      score += 1;
    } else if (bobsDecisions[i] === "?" || expertDecisions[i] === "?") {
      score += 0.5;
    }
  }
  return score;
}
