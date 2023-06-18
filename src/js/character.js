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
    this._attack = attack * ((100 - ((this.n - 1) * 10)) / 100);
    if (this.stoned) {
      this._attack = this.attack - Math.log2(this.n) * 5;
    }
  }
  
  get attack() {
    return this._attack;
  }
}
