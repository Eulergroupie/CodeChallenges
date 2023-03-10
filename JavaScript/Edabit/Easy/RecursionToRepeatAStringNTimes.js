const repetition = (t, n) => n < 1 ? '' : repetition(t, n - 1) + t;


// Testing
console.log(repetition('ab', 3));
console.log(repetition('kiwi', 1));
console.log(repetition('cherry', 2));
console.log(repetition('ab', 0));