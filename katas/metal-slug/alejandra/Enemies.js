import { hasMultipleLifes, hasWeapon } from './characteristics';
import { grenade, invulnerability, knife } from './abilities';

import { Character } from './Character';

export class Mercenary extends Character {
    constructor() {
        super(3, 2);
    }
}

Object.assign(Mercenary.prototype, hasWeapon);
Object.assign(Mercenary.prototype, grenade);
Object.assign(Mercenary.prototype, knife);

export class Alien extends Character {
    constructor() {
        super(2, 4);
    }
}

Object.assign(Alien.prototype, invulnerability);

export class Boss extends Character {
    constructor() {
        super(10, 6);
    }
}

Object.assign(Boss.prototype, hasMultipleLifes);
