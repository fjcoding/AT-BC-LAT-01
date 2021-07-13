export function correctness(bobsDecisions, expertDecisions) {

    let points = 0;

    for (let i = 0; i <= bobsDecisions.length - 1; i++) {
        if (bobsDecisions[i] == expertDecisions[i]) {
            points = points + 1;

        }
        else if (bobsDecisions[i] == '?' || expertDecisions[i] == '?') {
            points = points + 0.5;

        }
    }

    return points;
}
