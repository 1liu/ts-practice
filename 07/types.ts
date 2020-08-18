var num: string = 'aaa';
var num2: number = 1;
var num3: number | string = 1;

type multiTypes = number | string;
var num4: multiTypes = 1;

interface IState1 {
  name: string
}

interface Istate2 {
  age: number
}

type IState = IState1 | Istate2;
var obj: IState = { name: "Tim" }
var obj2: IState = { age: 23 }
var obj3: IState = { name: "Tom", age: 12 }


type sex="male"|"female";
function getSex(s:sex):string{
  return s;
}

getSex("female")
