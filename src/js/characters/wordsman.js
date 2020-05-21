import Character from './character';

class Wordsman extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defense = 10;
  }
}

export default Wordsman;
