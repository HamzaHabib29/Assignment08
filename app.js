// Task1
var num = prompt("Enter positive decimal number");
document.write("Number: " + num  + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("ceil value: " + Math.ceil(num) + "<br>");
document.write("floor value: " + Math.floor(num));

// Task2
var num = prompt("Enter negative decimal number");
document.write("Number: " + num  + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("ceil value: " + Math.ceil(num) + "<br>");
document.write("floor value: " + Math.floor(num));

// Task3
var number = prompt("Enter a number")
document.write(Math.abs(number))

Task4
var random = Math.random();
var diceValue = Math.ceil(random * 6)
document.write("Random dice value: " + diceValue)

// Task5
var random = Math.random();
var tossValue =Math.ceil(random * 2)

if(tossValue === 1){
    document.write(tossValue + "<br>")
    document.write("random coin value: Tails" )
}else{
    document.write(tossValue  + "<br>" )
    document.write("random coin value: Head")
}

// task6
var random = Math.random()
random = Math.ceil(random * 100)
document.write("Random number between 1 to 100: " + random)

// Task7
var weight = prompt("Enter your weight in kilograms <br> Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms")
var weight1 = parseFloat(weight);
document.write("The weight of user is " + weight1 + " Kilograms")

// Task8
var random = Math.ceil(Math.random()*10);
var input = prompt("Enter number between 1 to 10")
if(random === input){
    alert("Congratulations")
}else{
    alert("Try Again!")
}
