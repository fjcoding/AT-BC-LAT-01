export function correctness(bobsDecisions, expertDecisions) {
    let res = 0;

    bobsDecisions.forEach((c, i) => {
        c = bobsDecisions[i];
        if(c == expertDecisions[i]){
            res += 1;
        }
        else if(c != expertDecisions[i] && c == '?'){
            res += 0.5;
        }
        else if(c != expertDecisions[i] && expertDecisions[i] == '?'){
            res += 0.5;
        }
    });

    return res;
}