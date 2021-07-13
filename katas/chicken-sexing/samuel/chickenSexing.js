export function correctness(bobsDecisions, expertDecisions) {
    let result = 0;

    bobsDecisions.forEach((character, index) => {
        character = bobsDecisions[index];
        if (character == expertDecisions[index]) {
            result += 1;
        }else if (character == '?' || expertDecisions[index] == '?') {
            result += 0.5;
        }
    });

    return result;
}