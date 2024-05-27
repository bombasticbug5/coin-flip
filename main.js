// COIN FLIP SIMULATOR
// HTML Variables
let outputE1 = document.getElementById("output");
let headsE1 = document.getElementById("heads-out");
let tailsE1 = document.getElementById("tails-out");
//  Count variables
let numHeads = 0;
let numTails = 0;
// Button even litsener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //  Generate a Ran dom Number
  let randNum = Math.random();
  console.log(randNum);

  //     Simulate the coin flip
  if (randNum < 0.5) {
    document.getElementById("output").innerHTML = "<img src= 'img/heads.png'/>";
    numHeads++;
    headsE1.innerHTML = numHeads;
  } else {
    document.getElementById("output").innerHTML = "<img src='img/tails.png'/>";
    numTails++;
    tailsE1.innerHTML = numTails;
  }
}

let output = document.getElementById("outpit");
let num6 = document.getElementById("num6");
let num5 = document.getElementById("num5");
let num4 = document.getElementById("num4");
let num3 = document.getElementById("num3");
let num2 = document.getElementById("num2");
let num1 = document.getElementById("num1");

let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;

document.getElementById("btn1").addEventListener("click", btnClicked1);

function btnClicked1() {
  let randnum1 = math.random();
  console.log(randnum1);

  if (randnum1 < 0.17)
}
