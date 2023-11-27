import StonedAttack from './StonedAttack.js';

export default class Daemon extends StonedAttack {
    constructor(name) {
        super(name);
        this.type = 'Daemon';
        this.attack = 10;
        this.defense = 40;
    }
}