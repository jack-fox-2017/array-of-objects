let arr = []
function createObj(name, phase, gender) {
let obj = {}
 obj.name = name
 obj.phase = phase
 obj.gender = gender


arr.push(obj)

 return arr

}
arr.push(createObj("akbar",1,"male"));
arr.push(createObj("icha",1,"female"));



function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].name == name){
      return arr[i]
    }

  }
  // arr[0].nama
}

console.log(getData("akbar"));
// console.log(arr);
