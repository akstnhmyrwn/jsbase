// 对象操作
var o1 = {};
var o2 = o1;

o1.a = 'xxxxx';
console.log(o2); // { a: 'xxxxx' }


// 基础类型操作

var b1 = 1;
var b2 = b1;

b1 = 2; 
console.log(b2);    // 1

// 将对象的引用设置为基础数值可以隐式转换变量的引用方式
var c = {}; // c地址应用
c = 1;  // 值引用