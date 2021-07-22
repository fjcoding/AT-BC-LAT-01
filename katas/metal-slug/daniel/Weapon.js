export class Weapon {
    constructor () {
        this.name = '';
        this.attackPower = 0;
        this.multipleEnemys = false;
    }

    attack ( enemies ) {
        if ( Array.isArray(enemies) ){
            return enemies;
        }  else {
            enemies.pointsOfHealth--;
            // console.log(enemies);
            return enemies;
        };  
    };
};


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


/////////////
const handgun = new Handgun();
const enemies = [
    {pointsOfHealth: 5},
    {pointsOfHealth: 2},
    {pointsOfHealth: 10}
];

console.log( handgun.attack(enemies[0]) );

