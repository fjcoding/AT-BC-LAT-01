export function correctness(bobsDecisions, expertDecisions) {
    var i = bobsDecisions.length;                                   // Get the lenght of the options array
    var j = 0;                                                      // Declare the variable for looping
    var points = 0;                                                 // Declare the variable for points
    while (j<i) {
        if (bobsDecisions[j] == expertDecisions[j]) {               // Validation of the condition with same opinions
        points = points + 1;                                        // + 1 point
        }   
        else if (bobsDecisions[j] != expertDecisions [j]) {         // Validation of the difference between the opinions
            if (bobsDecisions[j] == '?') {                          // Validation if bob Decision was a doubt
                points = points + 0.5;                              // +0.5 points
            }
            else if (expertDecisions[j] == '?') {                   // Validation if expert Decision was a doubt
                points = points + 0.5;                              //+0.5 points
            }
        }
        j++;
    }
    return points;                                                  // return the total of points got
}