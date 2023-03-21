/* Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */
/*function moveZeros(r) {
    const len = r.length;
    const r_no_0 = r.filter(x => x !== 0);
    return [...r_no_0, ...Array(len - r_no_0.length).fill(0)];
}*/

// using better ideas from solutions in Codewars (but none exact)
const moveZeros = r => r.filter(x => x !== 0).concat(r.filter(x => x === 0));

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]), [false, 1, 1, 2, 1, 3, "a", 0, 0]);