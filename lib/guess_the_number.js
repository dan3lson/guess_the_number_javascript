var random_number = Math.floor((Math.random() * 10) + 1);
console.log("Random number:", random_number);

var name = prompt("Hi. What\'s your name?");
var guess = prompt(name + ", let\'s play a guessing game. Type in a number.");
console.log("Guess:", guess);

if (guess == random_number) {
  alert(":) Awesome, your number " + guess + " is correct!");
} else {
  alert(":( Dang, your number " + guess + " is not correct!");
}
