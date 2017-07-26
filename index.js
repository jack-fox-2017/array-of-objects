var tampung = [];
function createObj (name, phase, gender) {
  let object = {};
    object.name = name;
    object.phase = phase;
    object.gender = gender;
      tampung.push(object);
}

createObj("akbar",1,"male");
createObj("icha",1,"female");
console.log(tampung);


function getData(name){
  //your data here..
  for (i = 0;  i< tampung.length; i++){
    if (name == tampung[i].name){
        return tampung[i];
    }
  }
}
console.log(getData("icha"))
