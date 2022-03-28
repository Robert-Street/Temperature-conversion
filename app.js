var temp
function name() {
    var name = prompt("What is your name? ");
    return name;
}
function temperature() {
    temp = prompt("What is the temperature? Integers only ");
    return temp;
}
function fahrenheit() {
    var fahrenheitTemp = (((temp * 9) / 5) + 32)
    return fahrenheitTemp;
}
function celcius() {
    var celciusTemp = (((temp - 32) * 5) / 9)
    return celciusTemp;
}
function question(userName, userTemperature, convertedFahrenheit, convertedCelcius) {
    var answer = prompt(`Which temperature unit do you want to convert to ${userName}? Type f for c to f or c for f to c.`);
    if (answer == "f") {
        alert(`${userTemperature} degrees in celcius is ${convertedFahrenheit} degrees in fahrenheit.`);
       
    } else if (answer == "c") {
        alert(`${userTemperature} degrees in fahrenheit is ${convertedCelcius} degrees in celcius.`);
       
    }
}
question(name(), temperature(), fahrenheit(), celcius());