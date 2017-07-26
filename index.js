var arr = []

function createObj(nama, fase, gen) {
  var obj = {}
  obj['name'] = nama,
  obj['phase'] = fase,
  obj['gender'] = gen
  arr.push(obj)
}

createObj('tama', 1, 'male');
createObj('otong', 2, 'male');
createObj('suminep', 1, 'female')

console.log(arr);


////release 1//

function getData(param) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === param) {
      return arr[i]
    }
  }
}
console.log(getData('otong'));
