
/**
 * Array Basics
 */

const arr2 = [];
const arr = [12, "dsf", true];
const arr3 = [1, 2, 3, 4, 5];

const array = ["Monday", "Tuesday", "Wednesday" ];

const detail_2 = ["Varsha", "Female"];


console.log(array[1])



/**
 * Object
 */


const obj = { 
    key: "value"
};

const detail = {
  name: "Varsha",
  gender: "female"
};

// Way to access object keys 
console.log(detail['gender']);
        // OR
console.log(detail.name);


//Array of Arrays

const AoA = [ [ 'name', 'Achyut' ], [ 'gender', 'male' ], [ 'age', 23 ] ];
console.log('AoA', AoA)

// Array of Objects

const AoO = [
  {
    color: "White",
    company: [ {
      car: "skoda", 
      bike: "Honda" 
    }]
  },
  {
    fruit: "Orange"
  }
];

console.log(JSON.stringify(AoO));




// const arr4 = ["hjasfgjh","jdgkjhd"]

// const obj = {name: "hjdf", key: "value"}