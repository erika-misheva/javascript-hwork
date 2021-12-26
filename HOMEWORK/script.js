function typeOfVariable(testValue) {
    let result = typeof (testValue);
    // console.info(`The result from calling typeof function is: ${result}`);

    switch (result) {
        case "number":
            console.info('The type is number');
            testValue = "number";
            break;
        case "string":
            console.info('The type is string');
            testValue = "string";
            break;
        case "boolean":
            console.info('The type is boolean');
            testValue = "boolean";
            break;
        case "object":
            console.info('The type is object');
            testValue = "object";
            break;
        case "undefined":
            console.info('The type is undifiend');
            testValue = "undifiend";
            break;
        default:
            console.log(`Invalid input...`);
            break;
    }

    return testValue;
}

typeOfVariable({});
typeOfVariable(5);
typeOfVariable("cat");
typeOfVariable(true);
typeOfVariable();

function dogAgeToHumenAgeAndReverse(dogAge) {
    console.info(`The normal kalendar age is ${dogAge}`);

    let dogAgetoHumenAgeConverted = dogAge * 7;
    console.info(`The converted age for the Dog as Humen is: ${dogAgetoHumenAgeConverted}`);

    let humenAgeToDogAgeConverted = dogAge / 7;
    console.info(`The converted age for the Humen as Dog is ${humenAgeToDogAgeConverted}`)
}

dogAgeToHumenAgeAndReverse(7);

function moneyWithdraw(moneyBalance, moneyWithdrawAmount) {

    console.info(moneyWithdrawAmount, moneyBalance);
    if (moneyWithdrawAmount <= moneyBalance) {
        console.log(`Your withdraw is ${moneyWithdrawAmount} and your new Balance is ${moneyBalance - moneyWithdrawAmount}`);
    } else {
        console.log(" You don't have enough Money to make this transaction");
    }
}
moneyWithdraw(100, 5);
moneyWithdraw (100,100);
moneyWithdraw (100,150);

 let moneyWithdrawAmount= prompt("Enter how much would you like to witdraw") ;
 let moneyBalance= 10000;

moneyWithdraw (moneyBalance,moneyWithdrawAmount);

