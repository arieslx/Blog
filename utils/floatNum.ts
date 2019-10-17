/**
 * 比较浮点数
 * a + b = c
 * a,b,c为浮点数
 * @param {Number} (a + b - c)
 * @returns {Boolean}
 */

export function compareFloatNum() {
  return Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON;
}
