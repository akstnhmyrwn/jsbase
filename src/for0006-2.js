function createIncrementor() {
    var start = 0;
    return function () {
        return start++;
    };
}

var inc1 = createIncrementor();

console.log(inc1());    // 0
console.log(inc1());    // 1
console.log(inc1());    // 2


var inc2 = createIncrementor();     // 再次调用函数的定义,会产生一个新的实例,并分配一个新的空间,新旧两个实例不影响
console.log(inc2());    // 0
console.log(inc2());    // 1

console.log(inc1());    // 3