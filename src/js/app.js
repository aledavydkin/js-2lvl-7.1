import Bowman from './characters/bowman';
import Wordsman from './characters/wordsman';
import Magician from './characters/magician';
import Undead from './characters/undead';
import Zombie from './characters/zombie';
import Daemon from './characters/daemon';

const bowman = new Bowman('bowman');
const wordsman = new Wordsman('wordsman');
const magician = new Magician('magician');
const undead = new Undead('undead');
const zombie = new Zombie('zombie');
const daemon = new Daemon('daemon');


const arr = [bowman, wordsman, magician, undead, zombie, daemon];

arr.forEach((el) => {
  console.log(el);
});
