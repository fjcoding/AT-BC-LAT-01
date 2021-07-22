export class Weapon {
    constructor () {
        this.name = '';
        this.attackPower = 0;
        this.multipleEnemys = false;
    }

    attack ( enemies ) {
        if ( Array.isArray(enemies) ){
            // Several enemies were input, just reduce the pointsOfHealth of the first one
            enemies[0].pointsOfHealth--;
        }  else {
            enemies.pointsOfHealth--;
        }  
        return enemies;
    }
}


/* 
* Shotgun: adds 5 points to attack power, can hit multiple enemies
* Heavy Machine Gun: adds 2 points to attack power, can hit one single enemy
* Rocket Launcher: adds 4 points to attack power, can hit one single enemy
* Flame Shot: adds 5 points to attack power, can hits multiple enemies 
*/

export class Handgun extends Weapon {
    constructor () {
        super();
        this.name = 'hangun';
        this.attackPower = 1;
        this.multipleEnemys = false;
    }
}