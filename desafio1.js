let numbers = [9, 2, 1, 4, 6];
let median;
let numbersSorted = numbers.sort((a, b) => a - b);


if (numbersSorted.length % 2 == 1) {
    // if length is odd
    median = numbersSorted.length / 2 - .5;
    console.log(numbersSorted[median]);
}


