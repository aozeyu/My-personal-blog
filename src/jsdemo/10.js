//手写浅拷贝

function showllCopy(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  //浅拷贝数组或者对象
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

//手写深拷贝
// 一行 
var newObj = JSON.parse(JSON.stringify(oldObj))


function deepClone(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
