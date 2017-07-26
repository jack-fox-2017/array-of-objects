
var arr=[];
function createObj(nama, fase, gend){

var obj ={};
obj.name = nama;
obj.phase = fase;
obj.gender = gend;
return obj;
}

arr.push(createObj('Akbar',1,'male'));
arr.push(createObj('Icha',1,'female'));
arr.push(createObj('Adhit',2,'male'));
arr.push(createObj('Tama',2,'male'));
arr.push(createObj('Rifky',2,'male'));
console.log('var arr = ', arr);
