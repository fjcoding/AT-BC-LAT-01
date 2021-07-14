export function correctness(bobsDecisions, expertDecisions) {
  let scrPoint = 0;
  for (let index = 0; index < bobsDecisions.length; index++) {
    if (bobsDecisions[index] === expertDecisions[index]) {
      scrPoint += 1;
    } else if (bobsDecisions[index] === '?' || expertDecisions[index] === '?') {
      scrPoint += 0.5;
    }
  }
  return scrPoint;
}
