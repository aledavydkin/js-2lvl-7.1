import {
  describe, expect,
} from '@jest/globals';
import Bowman from '../characters/bowman';

describe('Функция повышения lvl', () => {
  test('Повышение уровня', () => {
    const received = new Bowman('bowman');
    received.levelUp();

    expect(received)
      .toEqual({
        name: 'bowman', lvl: 2, health: 100, attack: 30, defense: 30,
      });
  });

  test('Здоровье равно 0', () => {
    const received = new Bowman('bowman');
    received.health = 0;
    expect(() => { received.levelUp(); })
      .toThrowError(new Error('нельзя повысить левел умершего'));
  });

  test('Здоровье меньше 0', () => {
    const received = new Bowman('bowman');
    received.health = -1;
    expect(() => { received.levelUp(); })
      .toThrowError(new Error('нельзя повысить левел умершего'));
  });
});
