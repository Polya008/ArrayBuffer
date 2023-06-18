import Character from './character';

export default class Daemon extends Character {
  constructor(n) {
    super(n);
    this.attack = 10;
    this.defence = 40;
    this.stoned = 'Дурман';
  }
}
