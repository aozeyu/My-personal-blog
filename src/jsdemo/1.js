//手写浅拷贝
function shallowClone(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 手写深拷贝
//一行代码

let newObj = JSON.parse(JSON.stringify(oldObj));

//函数法

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
}
