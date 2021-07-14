export function correctness(bobsDecisions, expertDecisions) {

    let points = 0;

    for (let index = 0; index < bobsDecisions.length; index++) {
        if (bobsDecisions[index] == expertDecisions[index]){
            points++;
        } else if (bobsDecisions[index] == '?' || expertDecisions[index] == '?') {
            points += 0.5;
        }
    }

    return points;
}