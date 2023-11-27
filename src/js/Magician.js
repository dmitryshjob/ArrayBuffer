import StonedAttack from './StonedAttack.js';

export default class Magician extends StonedAttack {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 100;
    this.defense = 40;
  }
}