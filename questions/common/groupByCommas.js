/*
1.\b：匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。

2.\B：匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。
*/

console.log(/er\b/.test('verb'))
function groupByCommas(n) {
  var reg = /(?!^)(?=(\d{3})+\.)/g; // (?!^)--除去第一个(\d{3})+\.)
  // reg = /\B(?=(\d{3})+\.)/g;
  // reg = /\B(?=(\d{3})+(?!\d))/g
  console.log(n.toString().match(reg)) //
  return n.toString().replace(reg, (_match, $1) => {
    // console.log(_match, '--', $1)
    return ','
  });
}
console.log(groupByCommas(123456709.00023));    //1,234,567
console.log((12345670.00234).toLocaleString('en-US')) // 123,456,789
