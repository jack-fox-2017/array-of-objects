'use strict'

let arr = [];

function createObj(name, phase, gender) {
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj)
}

// let obj = createObj('Akbar',1,'male'),createObj('icha',1,'female')

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')


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
