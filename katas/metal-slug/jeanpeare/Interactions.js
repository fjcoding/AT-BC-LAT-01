import { getPlayerAttack } from "./Character.js";
import { getWeaponTargets, Weapon } from "./Weapons.js";
import { Vehicle } from "./Vehicles.js";
import { getEnemyHealth } from "./Enemy.js";

function Shooting (Character,Enemy){
    if (getPlayerAttack() >= getEnemyHealth()){
        console.log('Enemy Died');
    }
    else if (getEnemyHealth() == undefined){
        console.log('No Data Received')
    };
    
}

Shooting();

function PickWeapon (Weapon, Character){
    getWeaponName();
    getWeaponAttack();
    getWeaponTargets();
}