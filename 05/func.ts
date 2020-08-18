function func(name: string, age: number): number {
  return age;
}

var age: number = func("Time", 18)


function func2(name: string, age: number, sex?: string): number {
  return age;
}

var age2: number = func2("Time", 18, "male")
var age3: number = func2("Time", 18)
//var age4: number = func2("Time")



function func3(name: string = "Time", age: number = 18): number {
  return age;
}


//

var func4 = function (name: string, age: number): number {
  return age;
}

var func5: (name: string, age: number) => number = function (name: string, age: number): number {
  return age;
}

// interface

interface func6{
  (name:string, age:number): number
}

var func6: func6 = function (name: string, age: number): number {
  return age;
}

//
function getValue(value:number):number;
function getValue(value:string):string;
function getValue(value:number|string):number|string{
  return value
}

var a:string = getValue('a')
var b: number = getValue(1)
