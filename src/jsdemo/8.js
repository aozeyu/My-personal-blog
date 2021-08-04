//数组中的重复数字
function duplicate(numbers, duplication) {
  if (!numbers || numbers.length === 0) {
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (numbers.indexOf(num) !== numbers.lastIndexOf(num)) {
      // 查找前后索引不一样说明重复
      duplication[0] = num;
      return true;
    }
  }
  return false;
}

//斐波那契数列
//大家都知道斐波那契数列，现在要求输入一个整数 n，请你输出斐波那契数列的第 n 项（从 0 开始，第 0 项为 0）。(n<=39) 方法一：动态规划 DP

function Fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let dp = [0, 1]; // 先解决小问题后解决大问题

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}


//反转链表
/*function ListNode(x){
    this.val = x;
    this.next = null;
    输入一个链表，反转链表后，输出新链表的表头。
}*/
function ReverseList(pHead) {
  let prev = null //上一个节点
  while(pHead){
    curr = pHead //保存当前节点
    pHead = pHead.next
    curr.next = prev
    prev = curr
  }
  return prev
}

//跳台阶

function jumpFloor(number) {
  if (number == 1) {
    return 1
  }
  if (number == 2) {
    return 2
  }
  let arr = [0,1,2]

  for (let i =3 ; i<= number; i++){
    arr[0] = arr[1]
    arr[1] = arr[2]
    arr[2] = arr[0] + arr[1]
  }
  return arr2
}


//变态跳台阶

function jumpFloorII(number) {
  return Math.pow(2,number-1)
}


//方法二：动态归纳 DP
function jumpFloorII(number) {
  // write code here
  if (number === 1 || number === 2) return number;
  let dp = [1, 2];
  for (let i = 2; i < number; i++) {
    dp[i] = dp.reduce((t, v) => t + v) + 1;
  }
  return dp[number - 1];
}

//跳水板

// 输入：
// shorter = 1
// longer = 2
// k = 3
// 输出： [3,4,5,6]
// 解释：
// 可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。


var divingBoard = function (shorter,longer,k) {
  if (k<0) {
    return []
  }
  let ans = [k*shorter]
  let diff = longer - shorter // 长木板与短木板的个数差
  if (diff === 0) {
    return ans //全用的短木板
  }
  for(let i =1; i<= k ; i++){
    ans.push(ans[ans.length-1]+diff)
  }
  return ans
}