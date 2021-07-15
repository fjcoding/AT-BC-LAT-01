// import { expect } from '@jest/globals';
// import { test } from 'jest-circus';
 import { Args } from './Args.js';

test("Args class is expected to return a list of flags an values", () => {
    const args = new Args('-p 8080 -d /usr/');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: '8080'},
        {flag: '-d', value: '/usr/'}
    ]);
})

test('Args is expected ro return a list with flags and empty values', () => {
    const args = new Args('-p -d /usr/');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: ''},
        {flag: '-d', value: '/usr/'}
    ]);
})

test('Args is expected ro return a list with flags and negative values', () => {
    const args = new Args('-p 8080 -d /usr/ -i -9');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: '8080'},
        {flag: '-d', value: '/usr/'},
        {flag: '-i', value: '-9'}
    ]);
})

test('Args is expected ro return a list with flags and negative and empty values', () => {
    const args = new Args('-p -d /usr/ -i -9');
    expect(args.getArgsList()).toStrictEqual([
        {flag: '-p', value: ''},
        {flag: '-d', value: '/usr/'},
        {flag: '-i', value: '-9'}
    ]);
})