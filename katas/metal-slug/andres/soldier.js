export class Soldier { //enemy soldiers and vehicles are instances of Soldier
    constructor (weaponToEquip, soldierType, defaultHitPoints) {
        this.equipedWeapon = weaponToEquip;
        this.soldierType = soldierType;
        this.currentHealth = defaultHitPoints;
    }

    attackWithEquippedWeapon(){ //preferred method to deal damage
        return this.equipedWeapon.dealsDamage();
    }

    equipNewWeapon(newWeapon){
        return this.equipedWeapon = newWeapon;
    }

    isAlive(){
        return this.currentHealth >= 1;
    }

    takeDamage(damage){ //I've should named it takesDamage :(
        this.currentHealth -= damage;
    }
}