export default class Character {
  constructor(n) {
    this.n = n;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(attack) {
    if (this._stoned) {
      this.attack -= Math.log2(this.n) * 5;
    }
  }

  get attack() {
    this._attack = this._attack * ((100 - ((this.n - 1) * 10)) / 100);
    return this._attack;
  }
}
