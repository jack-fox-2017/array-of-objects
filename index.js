'use strict'

var arr =[]

var createObj = (name, phase, gender) => {
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  return arr.push(obj)
}

createObj('Anto', 1, 'Male')
createObj('Teja', 1, 'Male')
createObj('Rahmat', 1, 'Male')

console.log(arr);



var getData = (name) => {
  for (let i=0; i<arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i]
    }
  }
}

console.log(getData('Rahmat'));
