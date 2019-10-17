/**
 * 比较浮点数
 * a + b = c
 * a,b,c为浮点数
 * @param {Number} (a + b - c)
 * @returns {Boolean}
 * 检查等式左右两边差的绝对值是否小于最小精度
 */

export function compareFloatNum(a, b, c) {
  return Math.abs(a + b - c) <= Number.EPSILON;
}
