function createIncrementor(start) {
    return function () {
        return start++;
    };
}

var inc1 = createIncrementor(5);

console.log(inc1()); // 5
console.log(inc1()); // 6
console.log(inc1()); // 7


var inc2 = createIncrementor(5);
console.log(inc2()); // 5
console.log(inc2()); // 6