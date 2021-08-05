//快速排序

function  quickSort(array,start,end) {
  let length = array.length
  if (!Array.isArray(array) || length<= 1 || start > end) {
    return
  }

  let index = partition(array,start,end) // 将数组划分为两部分，并返回右部分的第一个元素的索引值
  quickSort(array,start,index - 1)  // 递归排序左半部分
  quickSort(array,index + 1,end)  // 递归排序右半部分
}


function partition(array,start,end) {
  let pivot = array[start] //取第一个值为枢纽值，获取枢纽值的大小
  while(start < end) {
    // 当 end 指针指向的值大等于枢纽值时，end 指针向前移动
    while(array[end] >= pivot && start<end){
      end--;
    }
    // 将比枢纽值小的值交换到 start 位置
    array[start] = array[end]
    while(array[start] < pivot && start < end){
      start ++ 
    }
     // 将比枢纽值大的值交换到 end 位置，进入下一次循环
    array[end] = array[start]
  }
   // 将枢纽值交换到中间点
  array[start] = pivot
  return start
}

// 有效括号

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  let stack = []
  for(let i = 0; i<s.length; i++) {
    let ch = s.charAt(i)
    if (ch == '(' || ch == '[' || ch == '{') 
      stack.push(ch) // stack 中都是 ( , [ , {
   if (!stack.length) return false;
   if (ch == ')' && stack.pop() !== '(') return false 
   if (ch == ']' && stack.pop() !== '[') return false
   if (ch == '}' && stack.pop() !== '}') return false
  return stack.length === 0 //空字符串可被认为是有效字符串。
  }
}


//将多维数组转化为一维数组
//[1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 * @return {Integer[]}
 */

let flatten = (nestedList) => {
  let result = []
  let fn = function (target, ary) {
    for(let i = 0 ; i< ary.length ; i++){
      let item = ary[i]
      if (Array.isArray(ary[i])) {
        fn(target,item) // 递归遍历
      }else {
        target.push(item) // 不是数组直接推入
      }
    }
  }

  fn(result,nestedList) // 第一次调用
}


//普通层序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 返回嵌套数组
 */

var levelOrder = function(root) {
  if (!root) return []
  let queue = []
  let res = []
  let level = 0
  queue.push(root)
  let temp;
  while(queue.length) {
    res.push([]);
    let size = queue.length
    // 注意一下: size -- 在层次遍历中是一个非常重要的技巧
    while(size--) {
      let front = queue.shift() // 删除第一个元素并返回
      res[level].push(front.val)
      //入队
      if(front.left) queue.push(front.left)
      if(front.right) queue.push(front.right)
    }
    level++
  }
  return res
}

