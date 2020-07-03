'use strict';

import _random = require('lodash/random');
import _sum = require('lodash/sum');

/**
 * Dices module
 *
 * @author cata
 */
export class DiceMod {
  regex = /^(\d*)d(\d*)$/;

  /**
   * Parse input
   *
   * @private
   * @memberof DiceMod
   */
  private parse = function (s: string | undefined) {
    // check if is valid
    if (!this.validate(s)) {
      throw new Error(s);
    }

    const match = this.regex.exec(s);
    const quantity = match[1];
    const sides = match[2];

    return {
      quantity: quantity ? parseInt(quantity, 10) : 1,
      sides: sides === '%' ? 100 : parseInt(sides, 10),
      toString: () => {
        return s;
      },
    };
  };

  /**
   * Roll dice
   *
   * @param {string} input 2d6 where:
   *           2 - number of dices
   *           6 - number of sides
   *
   * @returns {Array} dice values and sum
   * @example
   *      returns {sides: [1,3], sum: 4}
   */
  public roll(input: string, multiplicationIfDoubled: boolean = true) {
    let inputPars: { quantity: any; sides: any; toString?: () => any };
    if (!input) {
      throw new Error();
    } else if (typeof input === 'string') {
      inputPars = this.parse(input);
    }

    const diceArr = [];
    for (let i = 0; i < inputPars.quantity; i++) {
      diceArr[i] = _random(1, inputPars.sides);
    }

    if (true === multiplicationIfDoubled) {
      if (diceArr[0] === diceArr[1]) {
        diceArr.push(diceArr[0], diceArr[1]);
      }
    }

    return {
      sides: diceArr,
      sum: _sum(diceArr),
    };
  }

  /**
   * Validate input
   * @param  {string} s
   */
  private validate = function (s: string) {
    return this.regex.test(s);
  };
}
