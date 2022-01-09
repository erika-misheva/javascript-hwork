let input
input = prompt("Enter your year of birth:"); 
console.log (input)
let year = parseInt(input);
let chinesZodiac= (year - 4) % 12;

//if function.

if (chinesZodiac == 0){
    console.log ("Your chines Zodiac is Rat");
}
else if (chinesZodiac == 1){
    console.log ("Your chines Zodiac is Oz");
}
else if (chinesZodiac == 2){
    console.log ("Your chines Zodiac is Tiger");
}
else if (chinesZodiac == 3){
    console.log ("Your chines Zodiac is Rabbit");
}
else if (chinesZodiac == 4){
    console.log ("Your chines Zodiac is Dragon");
}
else if (chinesZodiac == 5){
    console.log ("Your chines Zodiac is Snake");
}
else if (chinesZodiac == 6){
    console.log ("Your chines Zodiac is Horse");
}
else if (chinesZodiac == 7){
    console.log ("Your chines Zodiac is Goat");
}
else if (chinesZodiac == 8){
    console.log ("Your chines Zodiac is Monkey");
}
else if (chinesZodiac == 9){
    console.log ("Your chines Zodiac is Rooster");
}
else if (chinesZodiac == 10){
    console.log ("Your chines Zodiac is Dog");
}
else if (chinesZodiac == 11){
    console.log ("Your chines Zodiac is Pig");
}
else {
    console.log ("you have entered wrong number")
}
