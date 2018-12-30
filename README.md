# JavaScriptOO(JavaScript面向对象)

练习使用JavaScript的面向对象高级部分,包括prototype、extends、nameplace、callback、events、Jquery Core等知识点。希望温故知新，多多利用。

[![GitHub stars](http://progressed.io/bar/100?title=prototype)](https://github.com/iquanzhan/JavaScriptOO)[![GitHub stars](http://progressed.io/bar/100?title=nameplace)](https://github.com/iquanzhan/JavaScriptOO)[![GitHub stars](http://progressed.io/bar/80?title=extends)](https://github.com/iquanzhan/JavaScriptOO)[![GitHub stars](http://progressed.io/bar/0?title=callback)](https://github.com/iquanzhan/JavaScriptOO)[![GitHub stars](http://progressed.io/bar/0?title=Jquery Core)](https://github.com/iquanzhan/JavaScriptOO)



### this更改指向

默认谁调用指向谁。（如无调用，直接使用，则this为window）

```
    Person.call(json); //==json.Person
    Person.apply(Student); //==Student.Person()
```

call：采用单个参数的形式

apply：采用参数数组的形式

### 闭包的使用场景

继承的封装、匿名函数



使用click进行事件叠加时，事件会叠加。最好使用unbind、bind事件



