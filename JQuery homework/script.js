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

// second solution
let firstTextInputs = $("#text2");
let secondInputs = $("#color2");
let generateHeaderBtns = $("#generate2");
let errorMessages = $("#forError2");

let h1last = $("h1:last");

let isBlackColor = false;

generateHeaderBtns.click(function () {
    h1last.css("color", secondInputs[0].value);
    isBlackColor = h1last.css("color") === `rgb(0, 0, 0)`;

     if (firstTextInputs[0].value && !isBlackColor) {
        h1last.text(`${firstTextInputs[0].value}`);
        console.log(firstTextInputs[0].value);

    }
    else {
        errorMessages.text("You have entered invalid input");
        console.log(firstTextInputs[0].value);
        console.log(secondInputs);
        console.info(`executed...`);
    }
});

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
