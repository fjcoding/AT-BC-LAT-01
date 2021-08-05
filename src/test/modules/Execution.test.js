import { Execution } from '../../main/modules/Execution.js';

var parserActionssArray = [
/*    {'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Handgun'},
    {'actionActor': 'Marco', 'actionType': 'Heal', 'element': 5},
    {'actionActor': 'RAT1', 'actionType': 'Receive Attack', 'target': 'Marco'},*/
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'south'},
    /*    {'actionActor': 'Marco', 'actionType': 'Receive Attack', 'element': 'RAS1'},
    {'actionActor': 'RAS1', 'actionType': 'Receive Attack', 'element': 'Marco'},*/
    {}];

var parserActorssArray = [
    {'health': 10, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': {
        'name': 'rifle',
        'power': 10,
        'xScope': 10,
        'yScope': 10
    }, 'position': {
        'xPos': 10,
        'yPos': 0
    }},
    {'health': 1, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle', 'position': {
        'xPos': 9,
        'yPos': 6
    }},
    {'health': 2, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': {
        'name': 'rifle',
        'power': 10,
        'xScope': 10,
        'yScope': 7
    }, 'position': {
        'xPos': 1,
        'yPos': 8
    }}];

const testExecution = new Execution ();

test('The execution of scenario need to return the actual status of the actors instances after actions being executed', () => {
    expect(testExecution.execute(parserActionssArray, parserActorssArray)).toEqual([
        {'health': 10, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': {
            'name': 'rifle',
            'power': 10,
            'xScope': 10,
            'yScope': 10
        }, 'position': {
            'xPos': 10,
            'yPos': 0
        }},
        {'health': -9, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle',  'position': {
            'xPos': 9,
            'yPos': 6
        }},
        {'health': 2, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': {
            'name': 'rifle',
            'power': 10,
            'xScope': 10,
            'yScope': 7
        }, 'position': {
            'xPos': 1,
            'yPos': 8
        }}]);
});