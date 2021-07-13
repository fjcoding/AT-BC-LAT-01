import { squareDigits } from './squareDigits.js';

test("squareDigits should square each digit and concatenate each result to a final int", () => {
    expect(squareDigits(0)).toBe(0);
    expect(squareDigits(3212)).toBe(9414);
    expect(squareDigits(2112)).toBe(4114);
    expect(squareDigits(2501)).toBe(42501);
    expect(squareDigits(5856)).toBe(25642536);
    expect(squareDigits(1100)).toBe(1100);
    expect(squareDigits(5337)).toBe(259949);
    expect(squareDigits(3853)).toBe(964259);
    expect(squareDigits(9778)).toBe(81494964);
    expect(squareDigits(4140)).toBe(161160);
    expect(squareDigits(6682)).toBe(3636644);
    expect(squareDigits(7171)).toBe(491491);
    expect(squareDigits(3917)).toBe(981149);
    expect(squareDigits(1803)).toBe(16409);
    expect(squareDigits(2432)).toBe(41694);
    expect(squareDigits(1682)).toBe(136644);
    expect(squareDigits(3390)).toBe(99810);
    expect(squareDigits(2101)).toBe(4101);
    expect(squareDigits(8432)).toBe(641694);
    expect(squareDigits(3642)).toBe(936164);
    expect(squareDigits(374)).toBe(94916);
    expect(squareDigits(5205)).toBe(254025);
    expect(squareDigits(7677)).toBe(49364949);
});