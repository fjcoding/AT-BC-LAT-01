// import { expect } from '@jest/globals';
// import { test } from 'jest-circus';
import { Args } from './Args.js';

test('Args class should return a new args string when I change it', () => {
    const args = new Args();
    args.putArgs('-p -d');
    expect(args.getArgs()).toBe('-p -d');
    args.putArgs('-p 8080 -d');
    expect(args.getArgs()).toBe('-p 8080 -d');
    args.putArgs('-p -i -m');
    expect(args.getArgs()).toBe('-p -i -m');
});

test('Args class is expected to return a list of flags an values', () => {
    const args = new Args('-p 8080 -d /usr/');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: '8080'},
        {flag: '-d', value: '/usr/'}
    ]);

    args.putArgs('-p -d /usr/');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: ''},
        {flag: '-d', value: '/usr/'}
    ]);

    args.putArgs('-p 8080 -d /usr/ -i -9');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: '8080'},
        {flag: '-d', value: '/usr/'},
        {flag: '-i', value: '-9'}
    ]);

    args.putArgs('-p -d /usr/ -i -9');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: ''},
        {flag: '-d', value: '/usr/'},
        {flag: '-i', value: '-9'}
    ]);

    args.putArgs('-p -d -b');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: ''},
        {flag: '-d', value: ''},
        {flag: '-b', value: ''}
    ]);

});
