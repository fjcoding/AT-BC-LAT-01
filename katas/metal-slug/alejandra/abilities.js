import { WeaponHitsMultiple, WeaponHitsOne } from './Weapon';

const knife = {
    useKnife(target) {
        this.weapon = new WeaponHitsOne(1);
        if (target.isTied === true) {
            target.isTied = false;
        } else {
            this.weapon.attack(target);
        }
    },
};

const grenade = {
    throwGrenade(targets) {
        this.setWeapon(new WeaponHitsMultiple(3));
        this.weapon.attack(targets);
    },
};

const invulnerability = {
    useInvulnerability() {
        this.isInvulnerable = true;
    },
    receiveDamageInv(damage) {
        if (!this.isInvulnerable) {
            this.health = this.health - damage;
        }
    },
    stopInvulnerability() {
        this.isInvulnerable = false;
    },
};

export { invulnerability, knife, grenade };
