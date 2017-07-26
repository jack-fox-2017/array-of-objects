var arr = []

function createObj (name , phase, gender) {
    var obj = {}
    obj.name = name;
    obj.phase = phase;
    obj.gender = gender;
    return arr.push(obj)
}

createObj('teja',1,'male')
createObj('anto',1,'male')
console.log(arr);

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i]
    }
  }
}

console.log(getData('anto'));
