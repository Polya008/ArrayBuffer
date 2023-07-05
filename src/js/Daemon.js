import Character from './Character';

export default class Daemon extends Character {
  constructor(n) {
    super(n);
    this.attack = 10;
    this.defence = 40;
    this.stoned = 'Дурман';
  }
}
