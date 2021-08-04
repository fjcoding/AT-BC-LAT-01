class Weapon {
    constructor(name, power, xScope, yScope){
        this.name = name;
        this.power = power;
        this.xScope = xScope;
        this.yScope = yScope;
    }
}

class WeaponList{
    constructor(){
        if(WeaponList.instance){
            return WeaponList.instance;
        }
        WeaponList.instance = this;
        this.weaponList = {
            handgun : new Weapon('handGun', 1, 5, 1),
            rifle : new Weapon('rifle', 1, 1, 1),
            shotgun : new Weapon('ShotGun', 5, 10, 5),
        };
    }
}

export const weapons = new WeaponList();