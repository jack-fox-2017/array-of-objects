// var arr = [{item:'book',quantity:'120'},{name:'pencil', quantity:'380'},{name:'Eraser', quantity:'24'}];
// console.log(arr[0].item);

// var arr2 = [];
// var obj = {};
// obj.nama='arif'
// obj.age=21
// arr2.push(obj);
//
// var obj2 = {};
// obj2.nama='anto'
// obj2.age=24
// arr2.push(obj2);
//
// console.log(arr2);

let arr = [];
function createObj(name, phase, gender){

  let obj = {};

  obj.name   = name
  obj.phase  = phase
  obj.gender = gender

  arr.push(obj);

  return arr;

}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);
