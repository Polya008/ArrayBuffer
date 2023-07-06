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
    return this._attack;
  }

  get attack() {
    this._attack = this._attack * ((100 - ((this.n - 1) * 10)) / 100);
     if (this._stoned) {
      this._attack -= Math.log2(this.n) * 5;
     }
   }
}
