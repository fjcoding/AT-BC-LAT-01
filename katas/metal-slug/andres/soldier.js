//const knifeAttackPower = 1; //ask for a constant container

export class Soldier { //enemy soldiers and vehicles are instances of Soldier
    //meleeWeapon = new Weapon ('knife',knifeAttackPower, false);
    constructor (weaponToEquip, soldierType, defaultHitPoints) {
        this.equipedWeapon = weaponToEquip;
        this.soldierType = soldierType;
        this.currentHealth = defaultHitPoints;
    }
    attack(withWeapon){ //yes, it can attack with any weapon, for example, a knife
        return withWeapon.dealsDamage();
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
    takeDamage(damage){
        this.currentHealth -= damage;
    }
    
    
}