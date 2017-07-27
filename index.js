let arr = []
function createObj(name, phase, gender) {
let obj = {}
 obj.name = name
 obj.phase = phase
 obj.gender = gender


arr.push(obj)

 return arr

}
arr.push(createObj("hari",1,"male"));
arr.push(createObj("ganang",1,"shemale"));



function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].name == name){
      return arr[i]
    }

  }

}

console.log(getData("hari"));
