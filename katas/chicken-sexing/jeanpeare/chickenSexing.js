export function correctness(bobsDecisions, expertDecisions) {
    var i = bobsDecisions.length;
    var j=0;
    var points = 0;
    //console.log(i,j,points,bobsDecisions.length,bobsDecisions[j],expertDecisions[j]);
    while (j<i){
        if (bobsDecisions[j] == expertDecisions[j]){
        points = points + 1;
        }   else if (bobsDecisions[j] != expertDecisions [j]) {
            if (bobsDecisions[j] == '?'){
                points = points + 0.5;
            }
            else if (expertDecisions[j] == '?') {
                points = points + 0.5;
            }
        }
        else { 
            points = points;
        }
        j++;
        //console.log(points);
    }
    
    return points;
}