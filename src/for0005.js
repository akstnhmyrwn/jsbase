// 如果同名,函数表达式总是覆盖函数声明,无论顺序

var f = function(){
    console.log(2);
};

function f (){
    console.log(1);
};

f();