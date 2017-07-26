// Release 0
var arr = []

function createObj(name, phase, gender){
  var obj = {
    "name" : name,
    "phase" : phase,
    "gender" : gender
  }
  //console.log(obj);
  arr.push(obj);
  //console.log(arr);
  return arr
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

//console.log("var arr = " + arr);
console.log(arr);


//Release 1
function getData(name){
  for(let i=0; i<arr.length; i++){
    var test = arr[i].name
    if(test == name){
      return arr[i]
    }
    //console.log(test);
  }
}
console.log(getData('Icha')); //will show all data from Icha
console.log(getData('Rifky'));
