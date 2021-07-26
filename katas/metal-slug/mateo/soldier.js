export class Soldier {
    constructor() {
        this.health = 1;
        this.atackDamage = 1;
        this.lifes = 3;
    }

    newWeapon(weapon, soldier) {
        let weaponArray = Object.entries(weapon);
        let soldierArray = Object.entries(soldier);
        for (let index = 0; index < weaponArray.length; index++) {
            let weaponProperty = weaponArray[index];
            let weaponPropertyName = weaponProperty[0];
            let weaponPropertyValue = weaponProperty[1];
            for (let index2 = 0; index2 < soldierArray.length; index2++) {
                let soldierProperty = soldierArray[index2];
                let soldierPropertyName = soldierProperty[0];
                if (soldierPropertyName == weaponPropertyName) {
                    soldier[weaponPropertyName] += weaponPropertyValue;
                }
            }
        }
        return soldier;
    }

    newVehicle(vehicle, soldier) {
        let vehicleArray = Object.entries(vehicle);
        let soldierArray = Object.entries(soldier);
        for (let index = 0; index < vehicleArray.length; index++) {
            let vehicleProperty = vehicleArray[index];
            let vehiclePropertyName = vehicleProperty[0];
            let vehiclePropertyValue = vehicleProperty[1];
            for (let index2 = 0; index2 < soldierArray.length; index2++) {
                let soldierProperty = soldierArray[index2];
                let soldierPropertyName = soldierProperty[0];
                if (soldierPropertyName == vehiclePropertyName) {
                    soldier[vehiclePropertyName] += vehiclePropertyValue;
                }
            }
        }
        return soldier;
    }
}