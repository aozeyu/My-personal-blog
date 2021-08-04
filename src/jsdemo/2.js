//手写call

Function.prototype.myCall = function (context) {
  const fn = Symbol("fn");
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1); //从1开始因为第一个参数为绑定的参数
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

//手写apply

Function.prototype.myApply = function (context) {
  const fn = Symbol("fn");
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(args);
  delete context.fn;
  return result;
};

//手写bind

Function.prototype.myBind = function (ctx, ...arg1) {
  return (...arg2) => {
    return this.call(ctx, ...arg1, ...arg2);
  };
};
