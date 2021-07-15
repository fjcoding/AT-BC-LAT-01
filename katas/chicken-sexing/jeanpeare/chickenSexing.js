export function correctness(bobsDecisions, expertDecisions) {
    var arraylength = bobsDecisions.length;                                  
    var arrayindex = 0;                                                      
    var points = 0;                                                          
    while (arrayindex < arraylength) {
        if (bobsDecisions[arrayindex] == expertDecisions[arrayindex]) {     
            points = points + 1;                                             
            }   
        else if (bobsDecisions[arrayindex] != expertDecisions [arrayindex]) {          
            if (bobsDecisions[arrayindex] == '?') {                          
                points = points + 0.5;                              
            }
            else if (expertDecisions[arrayindex] == '?') {                  
                points = points + 0.5;                              
            }
        }
        arrayindex++;
    }
    return points;                                                 
}