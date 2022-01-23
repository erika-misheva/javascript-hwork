let messagePrinted = $("#message");
let firstInput = $("input:first");
let greetBtn = $("#greet");

greetBtn.click(function () {
    messagePrinted.text(`Hello there ${firstInput[0].value}`);
});

let firstTextInput = $("#text");
let secondInput = $("#color");
let generateHeaderBtn = $("#generate");
let errorMessage = $("#forError");

// generateHeaderBtn.click (function(){
//     generateHeaderBtn.after((`<h1>${firstTextInput[0].value}</h1>`).css("color", secondInput[0].value));
//     console.log (`${secondInput[0].value}`); //this way the color of the button is changed
// })


// second solution
let firstTextInputs = $("#text2");
let secondInputs = $("#color2");
let generateHeaderBtns = $("#generate2");
let errorMessages = $("#forError2");

let h1last = $("h1:last");

let isValidColor = false;
let isBlackColor = false;
// console.log(firstTextInputs[0].value);

// When we use the logical (&&, ||, !) or relational operators ( >, <, ==, ===, >=, <=, !=, !==)
// we get back a boolean (true, false) value
// Ex: 5 > 2 (we get back) -> true
// "bob" === "tami" -> false
// "john" !== "tami" -> true

generateHeaderBtns.click(function () {
    h1last.css("color", secondInputs[0].value); // red gaga
    // isValidColor = h1last.css("color") !== `rgb(0, 0, 0)`;
    isBlackColor = h1last.css("color") === `rgb(0, 0, 0)`;

     if (firstTextInputs[0].value && !isBlackColor) {
        h1last.text(`${firstTextInputs[0].value}`);
        console.log(firstTextInputs[0].value);
        
        showColorValue(h1last);
    }
    else {
        errorMessages.text("You have entered invalid input");
        console.log(firstTextInputs[0].value);
        console.log(secondInputs);
        console.info(`executed...`);
    }
});

function showColorValue(element) {
    const color = element.css("color");

    console.info(`The color value for the element is: `);
    console.info(`-----    ${color}    -----`);
}

generateHeaderBtn.click(function () {
    if (firstTextInput[0].value && secondInput[0].value) {
        generateHeaderBtn.after(`<h1>${firstTextInput[0].value}</h1>`);
        let h1last = $("h1:last");
        h1last.css("color", secondInput[0].value)
    }
    else {
        errorMessage.text("You have entered invalid input");
    }

}) // this solution will load an error message only if the input for the text is empty
