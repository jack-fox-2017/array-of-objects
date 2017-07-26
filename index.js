'use strict'

let arr = [];

function createObj(name, phase, gender) {
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  return obj
}

// let obj = createObj('Akbar',1,'male'),createObj('icha',1,'female')

arr.push(createObj('Akbar',1,'male'))
arr.push(createObj('Icha',1,'female'))
arr.push(createObj('Adhit',2,'male'))
arr.push(createObj('Tama',2,'male'))
arr.push(createObj('Rifky',3,'male'))


function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if(name == arr[i].name){
      return arr[i]
    }
  }
}


console.log("");
console.log("- ini hasil arr");
console.log("");
console.log(arr);
console.log("");

console.log("- ini hasil function getData");
console.log("");
console.log(getData('Icha'));
console.log("");

console.log("- ini hasil function getData");
console.log("");
console.log(getData('Rifky'));
console.log("");
