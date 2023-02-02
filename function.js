/**
 * function with no parameters
 */

function goToSleep() {
    return "Soo jao!!";
}
//function calling
console.log(goToSleep());

/**
 * function with parameters/arguements
 */

function add(a, b) {
    return a+b;
}

const res = add(2,4);

console.log(res); //6

/**
 * ES6 ===> new way to define function called as arrow function
 */
const add2 = (a, b) => {
    const add = a + b;
    return add;
}


const res2 = add2(2,4);
console.log( res2 )


const goToSleep2 = () => "Soo jao!!";

console.log( goToSleep2() )