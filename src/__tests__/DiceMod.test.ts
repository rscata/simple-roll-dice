import { DiceMod } from '../DiceMod';

test('DiceMod', () => {
    const inst = new DiceMod();
    expect(inst.roll('2d6')).toHaveProperty('sides');
  });