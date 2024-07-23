var myName;
myName = null;
console.log(myName);
myName = "Asad";
console.log(myName);
//myname = undefined; //Error
//myname = 12; //Error
var myAge;
myAge = 19; //narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string 
//because of narrowing
var newAge = Math.random() > 0.6 ? "Shafique" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Shafique") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
var age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error
var asad;
asad = "asad";
//Asad = "asad";//Error
var yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
var data;
