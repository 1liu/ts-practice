function createArray(length: number, value: string): Array<any> {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
createArray(3, 'abc')

//

function createArray2<T>(length: number, value: T): Array<T> {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
var strArr:string[] = createArray2<string>(3, 'ss')
var numArr: number[] = createArray2(3, 1)
//

interface Icreate {
  <T>(name:string, value:T): T[]
}
let func:Icreate;
func = function<T>(name:string, value:T):Array<T>{
  return [];
}

//var numRes:number[] = func("Tim", 's')
var numRes: number[] = func("Tim", 1)
