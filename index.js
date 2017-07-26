var arr = []
function arrayToObject(name,phase,gender){
  var obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;
  arr.push(obj)
}

function getData(ind){
  var data = arr

  for(i=0;i<data.length;i++){
    if(ind === data[i].name){
      return data[i]
    }
  }
  return 'Data tidak ada'
}

arrayToObject('Akbar',1,'Male')
arrayToObject('Icha',1,'Female')
arrayToObject('Adhit',1,'Female')
arrayToObject('Tama',1,'Female')
arrayToObject('Rifky',1,'Female')
// console.log(arr);
console.log(getData('Tama'));
