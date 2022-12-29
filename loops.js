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

for ( let counter = 1; counter <= 10; counter++ ) {
    console.log("HELLO", counter, "persons"); 
}

let counter = 1;
while (counter <= 10) {
    if( (counter % 2) === 0 ) 
        console.log(counter, "EVEN");
    if( counter === 6 )
        break;
    counter++;
}
