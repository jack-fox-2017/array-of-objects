var arr =[];

// FIRST WAY

// function createObj(name,phase,gender) {
//   var obj={} //object di kosongin lg trs baru d push lg k array klo gk di kosong uda penuh brooo gk bisa d mskin new info
//   obj['Name'] = name;
//   obj['Phase'] = phase;
//   obj['Gender'] = gender;
//   arr.push(obj);
//   return arr;
// }

// SECOND WAY

function createObj(name,phase,gender) {
  var obj={} //object di kosongin lg trs baru d push lg k array klo gk di kosong uda penuh brooo gk bisa d mskin new info
  obj.Name = name;
  obj.Phase = phase;
  obj.Gender = gender;
  arr.push(obj); // bikin dulu object nya lalu di push ke array nya
  return arr;
}


// THIRD WAY

// function createObj(name,phase,gender) {
//   var obj={} //object di kosongin lg trs baru d push lg k array klo gk di kosong uda penuh brooo gk bisa d mskin new info
//   obj= {name,phase,gender}
//   arr.push(obj);
//   return arr;
// }
//
createObj('Akbar', 1,'male');
createObj('Icha', 1,'female');

console.log(arr);

function getData(nama) {
  for (i=0; i<arr.length; i++) {
    if (arr[i].Name == nama) {
      return arr[i];
    }
  }
}

console.log(getData('Icha'));

// var arr =[];
//
//
// function createObj(name,phase,gender,unique) {
//   var initial={} //object di kosongin lg trs baru d push lg k array klo gk di kosong uda penuh brooo gk bisa d mskin new info
//   initial = {name,phase}
//   var end = {}
//   end ={gender,unique}
//   var final ={}
//   final = {initial, end}
//   arr.push(final);
//   return arr;
// }
//
// createObj('Akbar', 1,'male', 123);
// createObj('Icha', 1,'female', 4567);
//
// console.log(arr);
