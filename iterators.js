const numbers = [4,5,6];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
/**
 * Memory / Variable Environment
 * numbers: [4,5,6]
 * Check this : if i < numbers.length
 * Do this : print the element from array numbers at index of i
 */
/**
 * Programs store data and apply functionality to it. But there are two parts to appying funcitons to collections of data.
 * 1. The process of accessing each elements.
 * 2. What we want to do to each element.
 * ITERATORS automate the accessing of each element - so we can focus on waht to do to each element - and make it acailable to us in a smooth way.
 * Imagine if we could create a function that sotred numbers and each time we ran the function it would return out an element (the next one) from numbers.
 * Note: It'd hace to remeber which element was next up somehow.
 * But this would let us think of our array/list as a 'stream'/flow of data with our function returniong the next element form our 'stream'- this makes our code more readable and more funcitonal.
 * But it starts with us returning a function from another function.
*/