//exercise 1
let animal = {
    name: 'Macorika',
    kind: 'Cat',
    speak: function (text) {
        return text;
    }
}
console.log(animal);
//console.log (animal.speak('Myau Myau Myau'));//one way
let whatAnimalsays = animal.speak("I want wet food");
console.log(whatAnimalsays);

//exercise 1.2

function Animal(nameFromUser, kindFromUser, soundFromUser) {
    this.name = nameFromUser;
    this.kind = kindFromUser;
    this.speak = function (soundFromUser) {
        console.log(soundFromUser);
        return soundFromUser;
    };
}

let myFisrtCat = new Animal('Macorika', 'Cat', 'Mjau');
console.log(myFisrtCat);
myFisrtCat.speak("Mjau");
let mySecondCat = new Animal('Morgana', 'Cat', 'Mjau');
console.log(mySecondCat);
mySecondCat.speak("Mjauuu");
let myLastCat = new Animal('Stella', 'Cat', 'Mjau');
console.log(myLastCat);
myLastCat.speak("Mjau mjau");
let myOnlyDog = new Animal('Dzeni', 'Dog', 'Woof woof');
console.log(myOnlyDog);
myOnlyDog.speak("Woof woof");

//exercise 2 the simplest solution

let book = {
    titel : "Harry Potter and the Chamber of Secrets",
    autor : " J. K. Rowling",
    readingStatus : true,
    isTheBookRead: function () {
        if (this.readingStatus) {
            console.log(`Already read ${this.titel}`);
        }
        else {
            console.log(`You should read ${this.titel}`);
        }
    }
}
console.log(book);
let resultOfReading = book.isTheBookRead();

// exercise 2.1 bonus ENTER THE VALUES FROM PROMPT()

let book1 = {
    titel : prompt("Enter the titel of the book"),
    autor : prompt("Enter the autour"),
    readingStatus : prompt("Enter yes if you have read the book or no if you have not"),
    isTheBookRead: function () {
        console.log(book1);
        if (this.readingStatus==="yes") {
            console.log(`Already read ${this.titel}`);
        }
        else {
            console.log(`You should read ${this.titel}`);
        }
    }
}

//anoter way for if 
// readingStatus : prompt("Enter true if you have read the book or leave this field empty"),
//     isTheBookRead: function () {
//         if (this.readingStatus) {
//             console.log(`Already read ${this.titel}`);
//         }
//         else {
//             console.log(`You should read ${this.titel}`);
//         }

let resultOfReading1 = book1.isTheBookRead();

//exercise 2.2 input from html

let title = document.getElementById("title");
console.log (title.innerText);
let autor = document.getElementById("autor");
console.log (autor.innerText);
let isRead = document.getElementById("read");
console.log(isRead.innerText);

let book2 = {
    titel : title.innerHTML,
    autor : autor.innerHTML,
    readingStatus : isRead.innerText,
    isTheBookRead: function () {
        if (this.readingStatus==="I have already read this book.") {
            console.log(`Already read ${this.titel}`);
        }
        else {
            console.log(`You should read ${this.titel}`);
        }
    }
}
console.log(book2);
let resultOfReading2 = book2.isTheBookRead();

