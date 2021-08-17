/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let num = 0;
  let cookie = 0;
  let child = 0;
  while (cookie < s.length && child < g.length) {
    //孩子的胃口小于饼干的尺寸
    if (g[child] <= s[cookie]) {
      num += 1;
      child += 1;
    } // 一个饼干的数量
    cookie += 1;
  }
  return num;
};
// @lc code=end
