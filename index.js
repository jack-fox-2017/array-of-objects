'use strict'

var arr = [];

function createObj(name, phase, gender) {
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
   arr.push(obj)
}

function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if (name == arr[i].name) {
      return arr[i]
    }
  }
}


createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 2, 'male')

// console.log(arr[0].name);
console.log(getData('Icha'));
console.log(getData('Adit'));

// console.log(obj);
