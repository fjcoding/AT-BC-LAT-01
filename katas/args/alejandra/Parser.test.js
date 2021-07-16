import { Parser } from './Parser';

describe('Parser Class', () => {
  const parserInstance = new Parser();
  test("Test if the function it's a flag can identify correctly a Flag", () => {
    expect(parserInstance.isAFlag('-l')).toBe(true);
    expect(parserInstance.isAFlag('-lo')).toBe(false);
    expect(parserInstance.isAFlag('lo')).toBe(false);
    expect(parserInstance.isAFlag('-0')).toBe(false);
    expect(parserInstance.isAFlag('-5')).toBe(false);
  });

  test('Test if the function setParserArgs adds the correct flags and values', () => {
    const parserInstance1 = new Parser();
    const parserInstance2 = new Parser();
    const parserInstance3 = new Parser();
    parserInstance1.setParserArgs(['-l', '-p', '8080', '-d', '/usr/logs']);
    expect(parserInstance1.gerParserArgs()).toEqual([
      { flag: 'l', value: false },
      { flag: 'p', value: 8080 },
      { flag: 'd', value: '/usr/logs' },
    ]);

    parserInstance2.setParserArgs(['-l', '-d', '/usr/logs']);
    expect(parserInstance2.gerParserArgs()).toEqual([
      { flag: 'l', value: false },
      { flag: 'd', value: '/usr/logs' },
    ]);
    parserInstance3.setParserArgs(['-p']);
    expect(parserInstance3.gerParserArgs()).toEqual([{ flag: 'p', value: 0 }]);
  });

  test('Test getArgValue returns the expected value', () => {
    const parserInstance = new Parser();
    parserInstance.setParserArgs(['-p']);
    expect(parserInstance.getArgParsedValue('p')).toBe(0);
  });
});
