'Release-0'
let arr = []
function createObject (name,phase,gender) {
  var objecKosong = {};
    objecKosong.name = name
    objecKosong.phase = phase
    objecKosong.gender = gender
      arr.push(objecKosong)
}
createObject('Akbar',1,'male');
createObject('Icha',1,'female')

console.log(arr);

'Relese-1'
function getData (name) {
  for(var i = 0 ; i< arr.length; i++){
    if (arr[i].name == name) {
      return arr[i]
    }
  }
}
console.log(getData('Icha'));






  // function ambilData (name) {
  //   for (var i = 0 ; i <arr.length; i++){
  //     if (arr[i].name == name){
  //       return arr[i]
  //     }
  //   }
  // }
