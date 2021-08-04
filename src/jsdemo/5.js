// 数组扁平化(递归)
var arr = [1, [2, [3, 4]]];

function flattenArray(array) {
  if (!Array.isArray(array)) {
    return;
  }
  let result = [];
  result = array.reduce(function (pre, item) {
    return pre.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
  return result;
}

// toString 实现
//// 这一种方法是利用了 toString 方法，它的一个缺点是改变了元素的类型，只适合于数组中元素都是整数的情况
function flattenArray(array) {
  return array
    .toString()
    .split(",")
    .map(function (item) {
      return +item;
    });
}
