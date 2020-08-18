class Person{
  private name: "Tim"
  protected age: 18
  say(){
    console.log(`Hello, im ${this.name}, im ${this.age}`)
  }
}


//private: child can not access it
//protected: child can access it
var person = new Person();
person.say();
//console.log(person.age) // age is private

class Child extends Person{
  callParent(){
    console.log(super.age)
    super.say();
  }
  static test(){
    console.log('test');
  }
}

var c = new Child();
c.callParent();
//console.log(c.age)
//c.test()
Child.test()
