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

// console.log(triangle(1));


// 5. String Splitter
// What is the input to the program? '02/20/2020'
// What is the output of the program?  ["02", "20", "2020"]
// What is the input to each recursive call? "20/2020", "2020"
// What is the output of each recursive call? "02", "20", "2020"

const stringSplitter = function(str) {
    let slash = str.search('/');
    let splitOutSlash = str.slice(0, slash);

    if (slash == -1) {
        splitOutSlash = str;
        return [ splitOutSlash ];
    }

    return [ splitOutSlash, ...stringSplitter(str.slice(slash + 1)) ];
}

// console.log(stringSplitter('02/20/2020'));


// 6. Fibonacci
// What is the input to the program? number
// What is the output of the program?  [0, 1, 1, 2, 3, 5, 8, 13]
// What is the input to each recursive call? number - 1
// What is the output of each recursive call? 0, 1, 1, 2, 3, 5, 8, 13, ...

let fibonacci = function(num) {
    
    if (num === 1) {
        return [0, 1];
    } else {
        let arr = fibonacci(num - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }

}

// console.log(fibonacci(7));


// 7. Factorial
// What is the input to the program? number, 5
// What is the output of the program? 120
// What is the input to each recursive call? (num - 1) OR (num + 1)
// What is the output of each recursive call? 4, 3, 2, 1, 0

const factorial = function(num) {

    if (num === 0) {
        return 1;
    } else if (Math.sign(num) === -1) { // for negative numbers
        return num * factorial(num + 1);
    } else if (Math.sign(num) === 1) { // for positive numbers
        return num * factorial(num - 1);
    }
}

// console.log(factorial(5));
// console.log(factorial(-3));

// DID NOT SOLVE MAZE PROBLEM
// 8 and 9. Find ways out of the maze
// What is the input to the program? maze
// What is the output of the program? 'RRDD'
// What is the input to each recursive call?
// What is the output of each recursive call?

// 3 x 3
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
 // 5 x 7
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const solveMaze = function(maze) {

    const m = maze;

    const move = function(row, column) {
        
        if(m[row][column] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(m[row][column] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            m[row][column] = 9;
            if(column < m.length - 1) {  // right
              console.log('R')
                move(column + 1, row);
            }
            if(row < m[column].length - 1) {  //down
              console.log('D')
                move(column, row + 1);
            }
            if(column > 0) {  // left
              console.log('L')
                move(column - 1, row);
            }
            if(row > 0) {  // up
              console.log('U')
                move(column, row - 1);
            }
        }
    }
}

// console.log(solveMaze(mySmallMaze));


// 10. Anagrams

const anagrams = function(prefix, word) {

    if (word.length <= 1) {
        console.log(prefix + word);
    } else {
        for (let i = 0; i < word.length; i++) {
            const nextLetter = word.substring(i, i + 1);
            const before = word.substring(0, i);
            const after = word.substring(i + 1);
            anagrams(prefix + nextLetter, before + after);
        }
    }

}

// anagrams('', 'east');


// 11. Organization Chart
const group = [
    { name: 'Zuckerburg', boss: null },
    { name: 'Schroepfer', boss: 'Zuckerburg' },
    { name: 'Schrage', boss: 'Zuckerburg' },
    { name: 'Sandberg', boss: 'Zuckerburg' },
    { name: 'Bosworth', boss: 'Schroepfer' },
    { name: 'Zhao', boss: 'Schroepfer' },
    { name: 'Steve', boss: 'Bosworth' },
    { name: 'Kyle', boss: 'Bosworth' },
    { name: 'Andra', boss: 'Bosworth' },
    { name: 'Richie', boss: 'Zhao' },
    { name: 'Sofia', boss: 'Zhao' },
    { name: 'Jen', boss: 'Zhao' },
    { name: 'VanDyck', boss: 'Schrage' },
    { name: 'Swain', boss: 'Schrage' },
    { name: 'Sabrina', boss: 'VanDyck' },
    { name: 'Michelle', boss: 'VanDyck' },
    { name: 'Josh', boss: 'VanDyck' },
    { name: 'Blanch', boss: 'Swain' },
    { name: 'Tom', boss: 'Swain' },
    { name: 'Joe', boss: 'Swain' },
    { name: 'Goler', boss: 'Sandberg' },
    { name: 'Hernandez', boss: 'Sandberg' },
    { name: 'Moissinac', boss: 'Sandberg' },
    { name: 'Kelley', boss: 'Sandberg' },
    { name: 'Eddie', boss: 'Goler' },
    { name: 'Julie', boss: 'Goler' },
    { name: 'Annie', boss: 'Goler' },
    { name: 'Rowi', boss: 'Hernandez' },
    { name: 'Inga', boss: 'Hernandez' },
    { name: 'Morgan', boss: 'Hernandez' },
    { name: 'Amy', boss: 'Moissinac' },
    { name: 'Chuck', boss: 'Moissinac' },
    { name: 'Vinni', boss: 'Moissinac' },
    { name: 'Eric', boss: 'Kelley' },
    { name: 'Ana', boss: 'Kelley' },
    { name: 'Wes', boss: 'Kelley' },
];

const organizationChart = function(org, boss) {

    let hierarchy = {};
    
    org
        .filter(person => person.boss === boss)
        .forEach(person => hierarchy[person.name] = organizationChart(org, person.name))

    return hierarchy;
}

// console.log(organizationChart(group, null));

// 12. Binary Representation

function binaryRep(num) {
    if (num === 0) {
        return '0';
    }
    const divideNum = Math.floor(num / 2);
    const remainder = num % 2;
    if (divideNum === 0) {
        return `${remainder}`;
    }
    return binaryRep(divideNum) + remainder.toString();
  };
  
// console.log(binaryRep(3));
// console.log(binaryRep(25));