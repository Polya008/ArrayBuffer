export default class Character {
  constructor(n) {
    this.n = n;
  }

  set stoned(stoned) {
    this.stoned = stoned;
  }

  get stoned() {
    return this.stoned;
  }

  set attack(attack) {
    this.attack = attack * ((100 - ((this.n - 1) * 10)) / 100);
    if (this.stoned) {
      this.attack -= Math.log2(this.n) * 5;
    }
  }

  get attack() {
    return this.attack;
  }
}
