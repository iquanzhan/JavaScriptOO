function Person() {

}

/* Person为一个函数对象，每个函数对象都拥有一个prototype={}
 * 
*/
console.log(Person.prototype);

Person.prototype.aa = 5;
Person.prototype.bb = function () {
    alert('bb');
}

var p = new Person();

console.log(p.aa);
//p.bb();

/* 模拟创建一个类，设置属性并输出 */

function Student() {

}
Student.prototype.setId = function (id) {
    this.id = id;
}

Student.prototype.setName = function (name) {
    this.name = name;
}

Student.prototype.getId = function () {
    return this.id;
}

Student.prototype.getName = function () {
    return this.name;
}

var s = new Student();
s.setId(1);
s.setName("做全栈攻城狮");

console.log(s.getId() + '\t' + s.getName());



