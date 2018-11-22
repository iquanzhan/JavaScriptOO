function Person() {

}

/* 每一个对象的创建都有一个默认的constructor */
console.log(Person.constructor);

/* 给Person添加属性 */
Person.weight = 140;

function Student() {

}

/* 给Person对象添加了一个Student对象的属性b */
Person.b = Student;
Person.c = {
    aa: 'aa'
}



/* 实现A.B.C.E.D.F.G() */
function A() {

}

function b() {

}

function c() {

}

function d() {

}

function e() {

}

function f() {

}

function g() {
    console.log("A.B.C.D.E.F.G()");
}
A.B = b;
A.B.C = c;
A.B.C.D = d;
A.B.C.D.E = e;
A.B.C.D.E.F = f;
A.B.C.D.E.F.G = g;

A.B.C.D.E.F.G();


//使用json对象
var AA = {};
AA.BB = b;
AA.BB.CC = c;
AA.BB.CC.DD = d;
AA.BB.CC.DD.EE = e;
AA.BB.CC.DD.EE.FF = f;
AA.BB.CC.DD.EE.FF.GG = g;

AA.BB.CC.DD.EE.FF.GG();



/* 命名空间生成方法 */
function nameplace(nameplaceString) {
    var temp = [];
    var array = nameplaceString.split('.');

    for (var i = 0; i < array.length; i++) {
        temp.push(array[i]);
        /* 把多个json对象添加到window上 */
        eval('window.' + temp.join('.') + '={}');
    }
}


/* 命名空间生成 */
nameplace('com.chengxiaoxiao.jsoo');

com.chengxiaoxiao.jsoo.alert = function () {
    alert("alert");
}

com.chengxiaoxiao.jsoo.alert();
