var arr = [];

function createObj(nama,phase,gender) {
  let obj = {}
  obj.nama=nama;
  obj.phase=phase;
  obj.gender=gender;
  arr.push(obj);
}

function getData(nama) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].nama === nama) {
      return arr[i]
    }
  }
  return 'data tidak ditemukan';
}

createObj('alfan',1,'male');
createObj('martin',2,'male');
createObj('Udin',4,'male');
console.log(arr);
console.log(getData('alfan'));
console.log(getData('martin'));
console.log(getData('al'));
