//alert("Is the page workinhg?");
console.log ("----first exercise----");
let fDiv = document.getElementById("first");
console.log(fDiv);
let header = document.getElementById("myTitle");
console.log(header);
header.innerText = "This is changed Page!"
let paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);
paragraphs[0].innerText = "This is the first paragraph.";
paragraphs[1].innerText = "This is the second paragraph.";
let textSelected = document.getElementsByTagName("text");
console.log(textSelected);
textSelected[0].innerText = "This is in JS selected and changed text!"
let allDivSelected = document.getElementsByTagName("div");
console.log(allDivSelected);
let headerInTheLastDiv = allDivSelected[2].firstElementChild;
console.log(headerInTheLastDiv);
headerInTheLastDiv.innerText = "I am changed!"
let lastChildOfTheLastDiv = allDivSelected[2].lastElementChild;
lastChildOfTheLastDiv.innerText = "It was easy."

console.log("--------Second exerciese---------");

let numbers = [2, 4, 5];
let secondExerciseDiv = document.getElementById("secondExercise");
function calculatingSumOfNumbers(array) {
    secondExerciseDiv.innerHTML += "<ul>";
    let sum = 0;
    for (const number of array) {
        secondExerciseDiv.innerHTML += `<li> This is number ${number} of an array`
        sum += number;
    }
    secondExerciseDiv.innerHTML += "</ul>"
    secondExerciseDiv.innerHTML += `<p>The sum of the numbers is ${sum}</p>`;
    let stringSum="";
    for (i=0; i<array.length; i++) {
        stringSum += `${array[i]}`
        if( i < array.length - 1) { 
            stringSum += ' + '; }
console.log (stringSum);
    }
    secondExerciseDiv.innerHTML += `<p> This is the mathematical equasion ${stringSum} = ${sum} </p>`
}

calculatingSumOfNumbers(numbers);

console.log("--------Bonus exercise-------");

let bonusDiv = document.getElementById("theBonus");

let nameOfTheRecipe = prompt("Enter the recpie name here.");
bonusDiv.innerHTML += `<h1>${nameOfTheRecipe}</h1>`;

function testIngridients(number) {
    let numberOfIngridients = number;
    bonusDiv.innerHTML += `<h3>For this recepie you will need ${numberOfIngridients} ingridiens<h3>`;
    bonusDiv.innerHTML += "<ul>"
    console.log(numberOfIngridients);
    let arrayOfIngridients = [];
    for (i = 0; i < numberOfIngridients; i++) {
        let ingridient = prompt(`Enter ${i+1} ingridient:`);
        console.log(ingridient);
        bonusDiv.innerHTML += `<li>${ingridient}</li>`;
        arrayOfIngridients.push(ingridient);
        console.log(arrayOfIngridients);
    }
    bonusDiv.innerHTML += "</ul>"
}
testIngridients(parseInt(prompt("Enter how many ingridients are needed?")));