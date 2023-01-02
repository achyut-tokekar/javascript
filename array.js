/**
 *  Important Methods in Array  
 */

// foreach loop

let arr = [23, true, 67, "Achyut", null];

const toggle = (bool_value) => !bool_value;

const newArr = [];

arr.forEach( (element) => {
    if( typeof element == 'number' ) {
        const newEle = element + 5;
        newArr.push(newEle);
    } else if ( typeof element == 'string' ) {
        const newEle = element.slice(2, 4);
        newArr.push(newEle);
    } else if ( typeof element == 'boolean' ) {
        const newEle = toggle(element);
        newArr.push(newEle);
    } else {
        newArr.push(element)
    }
});


/**
 * Homework make 2 functions same as toggle() == to slice and addd 5
 */

console.log(newArr, "<<<<<<This is updated array!!")