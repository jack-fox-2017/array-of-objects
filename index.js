let arr = []

function createObj(name, phase, gender) {
  let tampObj = {}
  tampObj.name = name
  tampObj.phase = phase
  tampObj.gender = gender

  arr.push(tampObj)
}

// [ { name: 'Sayyaf', phase: 1, gender: 'male' },
//   { name: 'Beben', phase: 1, gender: 'male' },
//   { name: 'Sany', phase: 1, gender: 'female' } ]
createObj('Sayyaf', 1, 'male');
createObj('Beben', 1, 'male');
createObj('Sany', 1, 'female');

function getData(nama){
  for (var i = 0; i < arr.length; i++) {
    if(nama.toLowerCase() == arr[i].name.toLowerCase()){
      return arr[i]
    }
  }
  return "Muup'S, Nama yang anda cari tidak ada!!!"
}

console.log(arr);
console.log("<<<<<<<<<==========================================>>>>>>>>>");
console.log(getData('BebeN'));
console.log("<<<<<<<<<================================>>>>>>>>>");
console.log(getData('sAny'));
console.log("<<<<<<<<<======================>>>>>>>>>");
console.log(getData('ariwew'));
