const obj = {
    name: "Achyut",
    gender: "male",
    age: 23
};

// To access objects
console.log(obj.name);   //Achyut
console.log(obj['gender']);  //male
console.log(obj.age);  //23

//Properties
console.log("Object.values(obj) = ", Object.values(obj));

console.log("Object.keys(obj) = ", Object.keys(obj));

console.log("Object.entries(obj) = ", Object.entries(obj));

//Destructuring
const obj2 = {
    name: "abc", 
    gender: "xyz",
    mobile_number: 123456789
};

const { name, gender } = obj2; 

