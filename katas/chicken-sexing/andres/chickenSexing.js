export function correctness(bobsDecisions, expertDecisions) {
    var score = 0;
    for (var index = 0; index < bobsDecisions.length; index++) {
        if (bobsDecisions[index] == expertDecisions[index]) {
            score += 1;
        } else if (bobsDecisions[index] == '?' || expertDecisions[index] == '?') {
            score += 0.5;
        }
    }
    return score;
}