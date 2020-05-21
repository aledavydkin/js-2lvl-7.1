import Character from './character';

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defense = 10;
  }
}
export default Zombie;
