export function correctness(bobsDecisions, expertDecisions) {
    var final = 0;
    var length = bobsDecisions.length;

    for (let i = 0; i < length; i++) {
        if (bobsDecisions[i] == expertDecisions[i]) {
            final = final + 1;
        } else if ((bobsDecisions[i] != expertDecisions[i]) && ((bobsDecisions[i] == '?') || (expertDecisions[i] == '?'))) {
            final = final + 0.5;
        }
    }

    return final;
}