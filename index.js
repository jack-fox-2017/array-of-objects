var arr = []
function createObj(name, phase, gender) {
  var obj = {}
      obj['name'] = name;
      obj['phase'] = phase;
      obj['gender'] = gender;
  arr.push(obj)
}


createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Ahmad', 2, 'male');
console.log('\n\n===== HASIL OBJ =====');
console.log(arr);

//Release 1
console.log('\n\n===== HASIL CARI =====');
for(let i = 0; i < arr.length; i++){
  if(arr[i].name === "Icha"){
    console.log(arr[i]);
  }
}
