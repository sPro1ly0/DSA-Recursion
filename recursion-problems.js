// 1. Counting Sheep
// What is the input to the program? a number of sheep, 3
// What is the output of the program? `All sheep jumped over thr fence`
// What is the input to each recursive call? numberOfSheep - 1
// What is the output of each recursive call? `${numberOfSheep}: Another sheep jumps over the fence`

const countingSheep = function(numberOfSheep) {
    // Base case
    if (numberOfSheep === 0) {
        return console.log('All sheep jumped over the fence');
    }
    // recursive case
    
    console.log(`${numberOfSheep}: Another sheep jumps over the fence`);
    countingSheep(numberOfSheep - 1);
    
};
// countingSheep(3);

// 2. Power Calculator
// What is the input to the program? (base, exponent) (10, 2)
// What is the output of the program?  value of the base raised to the power of the exponent, 100
// What is the input to each recursive call? (base, exponent - 1)
// What is the output of each recursive call? base

const powerCalculator = function(base, exponent) {

    if (exponent < 0) {
        return 'exponent should be >= 0';
    } else if (exponent === 0 ) {
        return 1;
    } else {
        return base * powerCalculator(base, exponent - 1);
    }

}

// console.log(powerCalculator(10, 2));

// 3. Reverse String
// What is the input to the program? 'hello'
// What is the output of the program?  'olleh'
// What is the input to each recursive call? str.slice(0, str.length - 1)
// What is the output of each recursive call? 'o'...

const reverseString = function(str) {
    let shortenStr = str.slice(0, str.length - 1)

    if (str.length === 0) {
        return "";
    }


    return str.charAt(str.length - 1) + reverseString(shortenStr);
}

// console.log(reverseString('hello'));

// 4. nth Triangular Number
// What is the input to the program? number, 4
// What is the output of the program?  10
// What is the input to each recursive call? num - 1 
// What is the output of each recursive call? 3, 2, 1, 0

const triangle = function(num) {
    if (num <= 0) {
        return 0;
    }

    return num + triangle(num - 1);
}

// console.log(triangle(4));