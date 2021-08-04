//手写闭包

for (let i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

//手写函数防抖
//函数抖动：在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
function debounce(fn, wait) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

//函数节流

//函数节流：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行,如果在同一个单位时间内某事件被触发多次，只有一次能生效。

function throttle(fn, delay) {
  var perTime = new Date();
  return function () {
    var nowTime = Date.now();
    if (nowTime - perTime >= delay) {
      perTime = nowTime;
      fn.apply(this, arguments);
    }
  };
}
