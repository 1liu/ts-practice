interface Istate {
  name: string,
  age: number
}

var obj1: Istate;

obj1 = {
  name: 's',
  age: 2
}

//optional
interface Istate2 {
  name: string,
  age?: number  // this is optional
}
var obj2:Istate2;
obj2 = {
  name: 'tim',
  age: 0,
  //sex: 'male'
}
obj2 = {
  name: 'tim'
}


interface Istate3 {
  name: string,
  age?: number,
  [propName:string]: any
}
var obj3: Istate3;
obj3 = {
  name: 'tim',
  age: 0,
  sex: 'male'
}

interface Istate4 {
  name: string,
  readonly age: number
}

var obj4:Istate4;
obj4={
  name: 'Tom',
  age:10
}
//obj4.age = 12;
