var reg = /(.*at)/gs;
var str = `The fat cat sat on the mat.
gat
yat`
const result = reg.exec(str);
console.log(reg.flags)
console.log('result', result)

// 正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外。一个是四个字节的 UTF-16 字符，这个可以用s修饰符解决；另一个是行终止符（line terminator character）。

const re = /foo.bar/s;
// 另一种写法
// const re = new RegExp('foo.bar', 's');

const res2 = re.test(`foo
bar`) // true
re.dotAll // true
re.flags // 's'
console.log(re.dotAll, res2)
console.log('--------------------')

// (?:pattern)表示匹配pattern，但不存储匹配结果，也即是不会存放到诸如$1这样的结果中，但进行了匹配，下次匹配搜索是从该pattern之后，如下代码可以进行验证：
var result1 = "123456789".replace(/(\d{3})(?:[^$])/g, "$1,");
console.log(result1); //123,567,9
// 先行断言
/* 
1. 只匹配%前面的数字
*/

console.log(/(\d+)/g.exec('12ji23%jidf123jf%125%'))
