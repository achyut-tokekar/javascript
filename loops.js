// console.log("Hello 1")
// console.log("Hello 2")
// console.log("Hello 3")
// console.log("Hello 4")
// console.log("Hello 5")
// console.log("Hello 6")
// console.log("Hello 7")
// console.log("Hello 8")
// console.log("Hello 9")
// console.log("Hello 10")

//For loop
for ( let counter = 1; counter <= 10; counter++ ) {
    console.log("HELLO", counter, "persons"); 
}

// While Loop
let counter = 1;
while (counter <= 10) {
    if( (counter % 2) === 0 ) 
        console.log(counter, "EVEN");
    if( counter === 6 )
        break;
    counter++;
}

// do-while loop
counter = 7;
do {
    console.log("AA gya bhai!!")
    counter++;
} while(counter <= 2);


// for...of ===> for iterating over array

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"


// for...in  ==> for iterating over objecy keys

const obj = {
    name: "Varsha",
    about: "She is nice but ..."
}

for (const key in obj) {
    console.log(key, ":", obj[key]);
}
