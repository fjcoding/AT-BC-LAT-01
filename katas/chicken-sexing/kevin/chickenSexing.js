export function correctness(bobsDecisions, expertDecisions) {
    let points = 0;
    for (let index = 0; index <= bobsDecisions.length - 1; index++) {
        if (bobsDecisions[index] == expertDecisions[index]) {
            points = points + 1;
        } else if (bobsDecisions[index] == '?' || expertDecisions[index] == '?') {
            points = points + 0.5;
        }
    }
    return points;
}
