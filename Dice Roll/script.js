// Dice Roll Simulator 

// Variables 
let diceImg = document.getElementById("dice"); 
let onecount = 0; 
let twocount = 0; 
let threecount = 0;
let fourcount = 0; 
let fivecount = 0; 
let sixcount = 0; 
let dice1 = document.getElementById("one-num"); 
let dice2 = document.getElementById("two-num"); 
let dice3 = document.getElementById("three-num"); 
let dice4 = document.getElementById("four-num"); 
let dice5 = document.getElementById("five-num"); 
let dice6 = document.getElementById("six-num"); 
let rollBtn = document.getElementById("roll-btn"); 

// Event Listeners 
document.getElementById("roll-btn").addEventListener("click", rollDice);

// Probability Distribution 
function rollDice () {
    let randnum = Math.random(); 

    if (randnum < 1/6) {
        onecount++; 
        diceImg.src = "Img/Dice1.jpg"; 
        dice1.innerHTML = onecount; 
    }else if (randnum < 2/6) {
        twocount++; 
        diceImg.src = "Img/Dice2.jpg"; 
        dice2.innerHTML = twocount; 
    }else if (randnum < 3/6) {
        threecount++; 
        diceImg.src = "Img/Dice3.jpg"; 
        dice3.innerHTML = threecount; 
    }else if (randnum < 4/6) {
        fourcount++; 
        diceImg.src = "Img/Dice4.jpg"; 
        dice4.innerHTML = fourcount;  
    }else if (randnum < 5/6) {
        fivecount++; 
        diceImg.src = "Img/Dice5.jpg"; 
        dice5.innerHTML = fivecount; 
    }else {
        sixcount++; 
        diceImg.src = "Img/Dice6.jpg"; 
        dice6.innerHTML = sixcount; 
    }
}