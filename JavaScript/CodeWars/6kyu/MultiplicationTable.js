/* Your task, is to create N×N multiplication table, of size provided 
in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]] */

/*
function multiplicationTable(s) {
    const result = [];
    for(let i = 1; i <= s; i++) 
        result.push([...Array(s).keys()].map(x=>i*(x+1)));
    return result;
} */

const multiplicationTable = s => 
    [...Array(s).keys()].map(i=>[...Array(s).keys()].map(x=>(i+1)*(x+1)));

console.log(...multiplicationTable(3), ...[[1,2,3], [2,4,6], [3,6,9]]);
console.log(...multiplicationTable(5));