// 自定义队列(先入先出)
function Queue() {
  var items = [];

  // 队列操作的方法
  // enter queue方法
  this.enqueue = function (element) {
    items.push(element);
  };

  // delete queue方法
  this.dequeue = function () {
    return items.shift();
  };

  // 查看前端的元素
  this.front = function () {
    return items[0];
  };

  // 查看队列是否为空
  this.isEmpty = function () {
    return items.length === 0;
  };

  // 查看队列中元素的个数
  this.size = function () {
    return items.length;
  };
}

//击鼓传花
function passGame(nameList, num) {
  // 1.创建一个队列, 并且将所有的人放在队列中
  // 1.1.创建队列
  var queue = new Queue();
  // 1.2.通过for循环, 将nameList中的人放在队列中
  for (var i = 1; i < nameList; i++) {
    queue.enqueue(nameList[i]);
  }
  // 2.寻找最后剩下的人
  while (queue.size() > 1) {
    // 将前num-1中的人, 都从队列的前端取出放在队列的后端
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }

  var endName = queue.dequeue();
  return endName;
}
