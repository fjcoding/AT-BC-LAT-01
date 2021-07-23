export function correctness(bobsDecisions, expertDecisions) {
    // There is a conditional for every case observed in the README file
    let score = 0;
    for (let index = 0; index < bobsDecisions.length; index++) {
        if (bobsDecisions[index] == expertDecisions[index]) {
            score = score + 1;
        } else if (bobsDecisions[index] == '?' || expertDecisions[index] == '?') {
            score = score + 0.5;
        }
    }

    return score;
}