function Student(){

}

Student.prototype.setName = function(name){
    this.name = name;
}

Student.prototype.getName = function(){
    return this.name;
}

function SuperStudent(){

}
/* 第一种 */
SuperStudent.prototype = Student.prototype;

/* 第二种：new Student()其实也是指向的是prototype */
//SuperStudent.prototype = new Student();


var superStudent = new SuperStudent();
superStudent.setName("aa");
alert(superStudent.getName());

