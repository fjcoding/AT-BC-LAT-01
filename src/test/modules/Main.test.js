import { Main } from '../../main/modules/Main.js';

const mainTest = new Main();

test('Obtain the results as an object called results with Actor name and the status, everyone survives', () => {
    var actorObjects = [
        {name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'Handgun',
            health: 3},
        {name: 'RAS1',
            type: 'Rebel Army soldier',
            weapon: 'rifle',
            health: 2},
        {name: 'RAT1',
            type: 'Rebel Army Tank',
            weapon: 'tank cannon',
            health: 2}];

    var actionObjects = [
        {actor: 'Marco',
            action: 'Pick Weapon',
            element: 'Shotgun'},
        {actor: 'Marco',
            action: 'Shoot Weapon',
            element: 'Shotgun'},
        {actor: 'RAT1',
            action: 'Receive Attack',
            from: 'Marco'}];

    expect(mainTest.follow(actorObjects, actionObjects)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Alive',
            'RAT1': 'Alive'
        });
});

test('Obtain the results as an object called results with Actor name and the status, enemies do not survive', () => {
    var actorObjects = [
        {name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'Handgun',
            health: 3},
        {name: 'RAS1',
            type: 'Rebel Army soldier',
            weapon: 'rifle',
            health: 2},
        {name: 'RAT1',
            type: 'Rebel Army Tank',
            weapon: 'tank cannon',
            health: 1}];

    var actionObjects = [
        {actor: 'Marco',
            action: 'Pick Weapon',
            element: 'Shotgun'},
        {actor: 'Marco',
            action: 'Shoot Weapon',
            element: 'Shotgun'},
        {actor: 'RAT1',
            action: 'Receive Attack',
            from: 'Marco'},
        {actor: 'RAS1',
            action: 'Receive Attack',
            from: 'Marco'},
        {actor: 'RAS1',
            action: 'Receive Attack',
            from: 'Marco'}];

    expect(mainTest.follow(actorObjects, actionObjects)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Dead',
            'RAT1': 'Dead'
        });
});