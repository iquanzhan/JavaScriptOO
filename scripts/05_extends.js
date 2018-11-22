nameplace('com.chengxiaoxiao');
/* 实现继承 */
com.chengxiaoxiao.extends = function (json, prop) {
    function F() {
    }

    /* 如果传过来的是对象，则把对象赋值给原型 */
    if (typeof json == 'object') {
        for (var i in json) {
            F.prototype[i] = json[i];
        }
    }

    if (typeof json == 'function') {
        F.prototype = json.prototype;
        for (var i in prop) {
            F.prototype[i] = prop[i];
        }
    }
    return F;
}

var Person = com.chengxiaoxiao.extends({
    aa: 'aa',
    bb: 'bb'
})
var p = new Person();

var SuperPerson = com.chengxiaoxiao.extends(Person, {
    cc: 'cc'
});

var sp = new SuperPerson();

alert(sp.aa);

