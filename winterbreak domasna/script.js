// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.
taskInfo(1);
function convertingMinutesToSeconds(minutes) {
    let seconds = minutes * 60
    seconds = parseInt(seconds);
    console.info(`There are ${seconds} sec.`);
}
convertingMinutesToSeconds(18);
convertingMinutesToSeconds(5);

taskInfo(2);

// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(number) {
    number = parseInt(number);
    number++;
    console.log(`This is the next number ${number}`);
    return number;
}

nextNumber(10);
nextNumber(21);
taskInfo(3);
// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.

function convertingHoursToSeconds(hours) {
    hours = parseInt(hours);
    let hoursConvertedToMinutes = hours * 60;
    let seconds = hoursConvertedToMinutes * 60;
    console.log(`In ${hours} hours there are ${seconds} sec. `);
    return seconds;
}

convertingHoursToSeconds(6);
convertingHoursToSeconds(14);
taskInfo(4);

// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainderOfDivision(num1, num2) {
    let remainder = num1 % num2;
    console.log(`The remainder of the numbers ${num1} and ${num2} is ${remainder}`);
    return remainder;
}
remainderOfDivision(5, 3);
remainderOfDivision(56, 8);
taskInfo(5);

// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function numberOfLegs(cows, chickens, pigs) {
    let sumOfNumbers = (cows * 4) + (chickens * 2) + (pigs * 4);
    console.log(`The number of the legs on the farm are ${sumOfNumbers}`);
    return sumOfNumbers;
}

numberOfLegs(5, 6, 7);
numberOfLegs(6, 9, 3);
taskInfo(6);

// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of 
// characters in the first string is equal to the total number of characters in the second string.

function comparingTwoStringsByCountOfCharacters(s1, s2) {
    if (s1.length == s2.length) {
        console.log('Characters in the first string is equal to the total number of characters in the second string')
    } else {
        console.log('characters in the first string is not equal to the total number of characters in the second string')
    }
}

comparingTwoStringsByCountOfCharacters('HelloWorld', 'Characters');
comparingTwoStringsByCountOfCharacters('no', 'yes');
taskInfo(7);

// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function checkingIfTheWordIsPluralOrSingular(word) {
    if (word.endsWith('s')) {
        console.log('The word is in plural');

    } else {
        console.log('The word is in singular');
    }
}

checkingIfTheWordIsPluralOrSingular('eggs');
checkingIfTheWordIsPluralOrSingular('egg');
taskInfo(8);

// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

function insensitiveCaseComparison(str1, str2) {
    if (str1.toUpperCase() === str2.toUpperCase()) {
        console.log('The two strings are identical');
    }
    else {
        console.log('The strings are not identical');
    }

}
insensitiveCaseComparison('egg', 'Egg');
insensitiveCaseComparison('Hello', 'hello');
taskInfo(9);
// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", because March is the 3rd month.
function numberOfCorrespondingMonth(numberOfMonth) {
    // numberOfMonth = parseInt(numberOfMonth);
    console.log(typeof (numberOfMonth), numberOfMonth);
    // console.log(typeof(parsedValue), parsedValue);
    switch (numberOfMonth) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
        default:
            console.log('There is no such month');
            break;
    }
}

// const month = prompt('Enter a month as a number');
// const monthAsNumber = parseInt(month);
// numberOfCorrespondingMonth(monthAsNumber);

// Confusing sometimes...
// numberOfCorrespondingMonth(parseInt(prompt('Enter a month as a number')));

// Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?

function truthyOrFalsyParametar(value1) {
    // if (value1) {
    //     console.log('The parametar has truthy value');
    // } else {
    //     console.log('The parametar has falsy value');
    // }

    // '' == true
    // true == true
    // 25 == true
    // [] == true

    if (value1) {
        console.log('The parametar has truthy value');
    } else {
        console.log('The parametar has falsy value');
    }
}
taskInfo(10);

truthyOrFalsyParametar('');
truthyOrFalsyParametar(true);
truthyOrFalsyParametar(25);
truthyOrFalsyParametar([]);

// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.



function createArrayTillSomeNumber(number) {
    let numbers = [];
    for (i = 1; i <= number; i++) {
        // console.log(`${i}`);
        numbers.push(i);
    }
    console.log(numbers);
    return numbers;
}

taskInfo(0);
createArrayTillSomeNumber(6);
createArrayTillSomeNumber(25);
/*
        Input: 6

        [1, 2, 3, 4, 5, 6]
*/
// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.

let arrayFirst = ['hello', 'World', 'bye'];
let arraySecond = ['bye', 'World', 'hello'];

function returnTheFirstElementOfArray(anyArray) {
    let theFirstElement = anyArray[0];
    console.log(theFirstElement);

    return theFirstElement;
}

taskInfo(1);

returnTheFirstElementOfArray(arrayFirst);
returnTheFirstElementOfArray(arraySecond);

// Task 2: Reverse an Array
// Write a function to reverse an array.

let normalArray = [1, 2, 3, 4];

function creatingAReverseArrey(array) {
    console.log(array);
    let reverseArray = [];

    for (i = array.length - 1; i >= 0; i--) {

        const element = array[i];
        // console.info(`Current element: ${element}`);
        // console.info(`Index: ${i}`);

        reverseArray.push(array[i]);
    }

    console.log(reverseArray);
}

taskInfo(2);
creatingAReverseArrey(normalArray);

// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array. 
// If the item is present, it should return the index, otherwise, it should return -1.



/*
    [1, 5, "bob"]

    RETURN INDEX: 2
*/


function findingTheIndexForExistingElement(item) {
    let array = [1, 5, "bob"];
    for (let i = 0; i < array.length; i++) {

        const element = array[i];
        if (element === item) {

            console.log(`The item index is ${i} and item is: ${element}`);
            return i;
        }
    }

    console.log(`No item found`);
    return -1;
}

taskInfo(3);
findingTheIndexForExistingElement('bob');
findingTheIndexForExistingElement('hahaha');

// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

taskInfo(4);
findingTheIndexForExistingElement(5);
findingTheIndexForExistingElement(false);

// Info
// const contains5 = findingTheIndexForExistingElement(5);
// if (contains5 !== -1) {
//     console.info(`It contains the number.`);
// }
// else console.info(`It doesn't contain the number.`);

function taskInfo(taskNumber) {
    console.info(`\n---------------- Task ${taskNumber} -------------------`);
}
taskInfo(5);
// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.



/*
    Input: [1, 2, 3]

    Output: [-1, -2, -3]
*/

const arrayOfPositiveNumbers = [1, 2, 3];

function negeteNumbers(array) {
    let negetedNumbers = [];
    for (const number of array) {

        let negetedNumber = -number;
        negetedNumbers.push(negetedNumber);
    }

    console.log(negetedNumbers);
}

negeteNumbers(arrayOfPositiveNumbers);

taskInfo(6);

// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between 
// the biggest and smallest numbers.

function getDifferenceOfTwoNumbers(array) {
    let max = -Infinity;
    for (const number of array) {
        if (max < number) {
            max = number
        }
    }
    console.log(`The biggest number is:${max}`);
    let min = +Infinity;
    for (const number of array) {
        if (min > number) {
            min = number
        }
    }
    console.log(`The smallest number is:${min}`);
    console.log(`The difference is ${max - min}`);
}

getDifferenceOfTwoNumbers([4, 2, 7, 4]);

// Other way...
// function getDifferenceOfTwoNumbers(array) {
//     let max = -Infinity;
//     let min = +Infinity;

//     for (const number of array) {
//         if (max < number) {
//             max = number
//         }

//         if (min > number) {
//             min = number
//         }
//     }

//     console.log(`The biggest number is:${max}`);
//     console.log(`The smallest number is:${min}`);

//     console.log(`The difference is ${max - min}`);
// }

// getDifferenceOfTwoNumbers([4, 2, 7, 4]);


taskInfo(7);
// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.

function multiplyByLength(array) {
    let multiplyNumbers = [];
    for (const number of array) {
        let multiplyNumber = array.length * number;
        multiplyNumbers.push(multiplyNumber);
    }
    console.info(`The new array is ${multiplyNumbers}`);

    return multiplyNumbers;
}

multiplyByLength([2, 4, 6]);

/*
    Input: [2, 4, 6], length: 3

    Output: [6, 12, 18]
*/


taskInfo(8);
// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height,
// and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height, is greater than or equal to the hurdle height.

function hurdleJump(num, array) {
    let canClearAllHurdles = true;

    for (const number of array) {
        if (num < number) {
            canClearAllHurdles = false;
            break;
        }
    }

    if (canClearAllHurdles) {
        console.log('The hurdler can clear all hurdles.')
    }
    else {
        console.log("The hurdler can't clear all hurdles.");
    }
}

const hurdleHeights = [2, 4, 6, 8]
hurdleJump(5, hurdleHeights);
hurdleJump(10, hurdleHeights);

/*
    Input 1: [2, 4, 6, 8] -> hurdle heights
    Input 2: 5 -> jumper's jump height
    Output: The hurdler can't clear all hurdles.

    Input 1: [2, 4, 6, 8]
    Input 2: 10
    Output: The hurdler can clear all hurdles.
*/
taskInfo(9);
// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument 
//and returns an array of numbers counting down from this number to zero.

function creatingACountDownArrey(number) {
    let countDownArray = [number];

    for (i = number - 1; i >= 0; i--) {
        number--;
        countDownArray.push(number);
    }

    console.log(countDownArray);
}
creatingACountDownArrey(12);


taskInfo(9);
// Task 10: Odd Up, Even Down
// Create a function that goes through the array, 
// incrementing (+1) for each odd number and decrementing (-1) for each even number.

/*
input: [1,2,3,4]
output: [2,1,4,3]
*/

function oddUpEvenDown(array) {
    for (let number of array) {
        if (number % 2 == 0) {
            number--
            console.log(number);
        }
        else {
            number++
            console.log(number);
        }
    }
}

oddUpEvenDown([1, 2, 3, 4]);