export function correctness(bobsDecisions, expertDecisions) {
    let points = 0;
    for (let i = 0; i < bobsDecisions.length; i++){
        if (bobsDecisions[i] == expertDecisions[i]){
            points++;
        } else if (bobsDecisions [i] == '?'){
            points += 0.5;
        } else if (expertDecisions [i] == '?'){
            points += 0.5;
        }
    }

    return points;
}