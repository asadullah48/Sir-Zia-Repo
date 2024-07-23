let myName: string | null;
myName = null;
console.log(myName);

myName = "Asad";
console.log(myName);

//myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;

myAge = 19;//narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know";//narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                                //can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing

let newAge = Math.random() > 0.6 ? "Shafique": 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Shafique") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number


let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


let asad: "asad";

asad = "asad";
//Asad = "asad";//Error


let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

if (yourName) {
    yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase();//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;
