export function correctness(bobsDecisions, expertDecisions) {
    // There is a conditional for every case observed in the README file
    let count = 0;
    for (let i = 0; i < bobsDecisions.length; i++) {  
        if (bobsDecisions[i] == expertDecisions[i]) {
            count = count + 1;
        } else if ((bobsDecisions[i] != expertDecisions[i]) && 
            ((bobsDecisions[i] == '?') || (expertDecisions[i] == '?'))) {
            count = count + 0.5;
        } 
    }

    return count;
}