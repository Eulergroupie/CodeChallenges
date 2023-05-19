/*Sum of the first nth term of Series
DivyanshBatham1
 JavaScript
Node v18.x

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

/*
function SeriesSum(n, s = 1) {
    if(n == 1) return s.toFixed(2);
    return SeriesSum(n - 1, s + 1 / (3*(n - 1) + 1));
}*/

//const SeriesSum = (n, s = 1)  => n == 1 ? s.toFixed(2) : SeriesSum(n - 1, s + 1 / (3*(n - 1) + 1));

const SeriesSum = n => {
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += 1 / (3 * i + 1);  
        //console.log(sum)
    }  
    return sum.toFixed(2);
}
console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")
