/* 
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
以此类推。
*/

// 创建一个task list 先把所有函数推进去，在链式调用
// class _lazyMan {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hi! This is ${name}`)
//     this._task = [];
//     setTimeout(() => { this.next() }, 0) // 调用的开始
//   }
//   next() {
//     var fn = this._task.shift()
//     fn && fn();
//   }
//   sleep(time) {
//     var self = this;
//     var fn = () => {
//       setTimeout(function () {
//         console.log(`Wake up after ${time}`)
//         self.next();
//       }, time * 1000)
//     }
//     self._task.push(fn);
//     return self;
//   }
//   eat() {
//     const self = this;
//     var fn = () => {
//       console.log('eat dinner')
//       self.next()
//     }
//     this._task.push(fn)
//     return this;
//   }
//   sleepFirst(time) {
//     const self = this;
//     var fn = () => {
//       setTimeout(function () {
//         console.log(`Wake up after ${time}`)
//         self.next()
//       }, time * 1000)
//     }
//     this._task.unshift(fn)
//     return self
//   }
// }

// function LazyMan(name) {
//   return new _lazyMan(name);
// }

// LazyMan('jacky').eat().sleepFirst(5)
// LazyMan('jacky').sleep(5).eat()
// console.log(myLazyMan);


function LazyMan(name) {

  Promise.prototype.eat = (str) => {
    console.log('str', str)
  }

  Promise.prototype.sleep = (time) => {
    setTimeout(() => {
      onsole.log(`Wake up after ${time}`)
    }, time * 1000)
  }

  return new Promise(() => {
    console.log(`Hi! This is ${name}!`)
  }).then(() => { console.log('ji') })

}
const result = LazyMan('jacky').eat('cookies');
console.log(result)
