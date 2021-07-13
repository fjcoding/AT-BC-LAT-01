export function correctness(bobsDecisions, expertDecisions) {
    var score = 0;
    var length = bobsDecisions.length;

    for (let index = 0; index < length; index++) {
        if (bobsDecisions[index] == expertDecisions[index]) {
            score += 1;
        } else if (bobsDecisions[index] == '?' || expertDecisions[index] == '?') {
            score += 0.5;
        }
    }

    return score;
}