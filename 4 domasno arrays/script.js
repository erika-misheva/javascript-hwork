//function tellstory
function taskInfo(taskNumber) {
    console.info(`\n---------------- Task ${taskNumber} -------------------`);
}
taskInfo(1)

function tellStory(name, mood, activity) {

    console.log(`This is ${name}. ${name} is a nice Cat. 
Today ${name} is ${mood}. She is ${activity} all day. The end.`)

}
tellStory('Morgana', 'Happy', 'Sleeping');

// function for sum of numbers
taskInfo(2);

function sumOfNumbers(array) {
    sum = 0;
    for (const number of array) {
        sum += number;
    }
    console.log(`This is the sum ${sum} of the numbers `);
    return sum;
}

let arreyOfFiveNumbers1 = [2, 3, 4, 5, 3];
let arreyOfFiveNumbers2 = [8, 9, 2, 3, 4];

sumOfNumbers(arreyOfFiveNumbers1);
sumOfNumbers(arreyOfFiveNumbers2);
taskInfo(2.1)
function validateNumber(array) {
    for (const element of array) {
        if (!isNaN(element)) {
            console.log(`This is valid number ${element}`);
        } else {
            console.log(`This is not number ${element}`);
        }
    }

}
let arreyOfStringAndNumbers = [1, 2, 3, 4, "yes", "no", 2];
validateNumber(arreyOfFiveNumbers2);
validateNumber(arreyOfStringAndNumbers);

taskInfo(3);

function makingStringOfElements(array) {
    let sumOfStrings = " ";
    for (const element of array) {
        sumOfStrings += element;
    }
    console.log(sumOfStrings);
}

let stringArray = ["Hello", " ", "there", " ", "students", " ", "of", " ", "SEDC", "!"]
makingStringOfElements(stringArray);

taskInfo(4);
function addSpaceOrNewLine(array) {
    for (const number of array) {
        if (number % 2 == 0) {
            console.log(` ${number} \n`);
        }
        else {
            console.log(number + "");
        }

    }
}


addSpaceOrNewLine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

taskInfo(5);

function sumOfMaxAndMin(array) {
    let max = -Infinity;
    let min = +Infinity;
    for (const number of array) {
        if (max < number) {
            max = number
        }
        if (min > number) {
            min = number
        }
    }
    let sum = min + max;
    console.log(`The sum of max ${max} and min ${min} is ${sum}`);
}
sumOfMaxAndMin([3, 5, 6, 8, 11]);

taskInfo(6);

function fullName(array1, array2) {
    let sumOfFullName;
    for (i = 0; i < array1.length && i < array2.length; i++) {
        sumOfFullName = array1[i] + " " + array2[i];
        console.log((i + 1) + '.' + sumOfFullName);
    }
}


let arrayOfFirstNames = ['Erika', 'Biljana', 'Sasho'];
let arrayOfSurnames = ['Misheva', 'Trpevska', 'Stojkovski'];
fullName(arrayOfFirstNames,arrayOfSurnames);

// same exercise with array
console.log("----same exercise with array----");

function fullNameAnother(array1, array2) {
    let sumOfFullNameArray =[];
    let fullName = '';
    for (i = 0; i < array1.length; i++) {
        fullName = `${i+1}. ${array1[i]} ${array2[i]}`;
        sumOfFullNameArray.push(fullName);
        console.log(fullName);
    }
    console.log (sumOfFullNameArray);
    return sumOfFullNameArray;
}

fullNameAnother(arrayOfFirstNames,arrayOfSurnames);