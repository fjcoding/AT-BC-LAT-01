export class Weapon {
    constructor ( name = 'handgun', attackPower = 1 ) {
        this.name = name;
        this.attackPower = attackPower;
    }
    shoot () {}
    
    reduceHealthOfEnemy ( enemyHealth ) {
        if ( enemyHealth >= this.attackPower ) return enemyHealth - this.attackPower;
        return 0;
    }
}

export class SingleEnemyWeapon extends Weapon {

    shoot ( enemies ) {
        if ( Array.isArray(enemies) ){
            // Several enemies were input, just reduce the pointsOfHealth of the first one
            if ( enemies[0].pointsOfHealth >= 0 ) {
                enemies[0].pointsOfHealth = this.reduceHealthOfEnemy( enemies[0].pointsOfHealth );
            }
            return enemies;
        }

        throw new Error('Enemies must be in an array, even if it is just 1 enemy');
    }
}

export class MultipleEnemiesWeapon extends Weapon {

    shoot ( enemies ) {
        if ( Array.isArray(enemies) ){
            enemies.forEach(enemy => {
                if ( enemy.pointsOfHealth >= 0 ) {
                    enemy.pointsOfHealth = this.reduceHealthOfEnemy( enemy.pointsOfHealth );
                }              
            });

            return enemies;
        }

        throw new Error('Enemies must be in an array, even if it is just 1 enemy');
    }
}
