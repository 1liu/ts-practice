//Method 1: Square brackets
var arr: number[] = [1, 2, 3];
var arr2: string[] = ['a', 'b'];
var arr3: any[] = ['a', 2];

//Method 2: Generic
var arr4: Array<number> = [1, 2, 3]
var arr5: Array<string> = ['1', '2']
var arr6: Array<any> = ['1', '2', 3]

//Method 3: Interface
interface IState {
  name: string,
  age: number
}

interface Iarr {
  [index: number]: IState
}

//var arr7:Iarr = [1,2,3,'4']


var arr8: Iarr = [{name: 'AAA', age:10}]


var arrType: Array<IState> = [{ name: 'AAA', age: 10 }]

var arrType2: IState[] = [{ name: 'AAA', age: 10 }]
