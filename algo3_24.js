var a = 25;
a = a - 13;
console.log(a/2);
    
// 6

a = "hello";
console.log(a + " hello");1

// hello hello

// QUESTION 2
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);


// sunglasses, a coat, and a smile