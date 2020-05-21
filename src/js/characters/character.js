class Character {
  constructor(name) {
    this.name = name;
    this.lvl = 1;
    this.health = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.lvl += 1;
    this.health *= 100;
    this.attack *= 1.2;
    this.defense *= 1.2;
  }
}

export default Character;
