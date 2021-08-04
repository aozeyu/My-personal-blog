//js实现数组扁平化
//这一种方法是利用了 toString 方法，它的一个缺点是改变了元素的类型，只适合于数组中元素都是整数的情况
function flattenArray(array) {
  return array
    .toString()
    .split(",")
    .map(function (item) {
      return +item;
    });
}

//// 这一种方法通过递归来实现，当元素为数组时递归调用，兼容性好

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

//数组去重

function unique(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return;
  }

  return [...new Set(array)];
}

function unique(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return;
  }
  var result = [];

  array.forEach(function (item) {
    //如果索引值===-1说明没有找到
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
    return result;
  });
}
