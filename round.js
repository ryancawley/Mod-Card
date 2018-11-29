// update variables to include attack and defense attributes
let drawButton = document.getElementById("drawButton");
let message = document.getElementById("message");
let card1Name = document.getElementById("card1Name");
let card1HealthPoints = document.getElementById("card1HealthPoints");
let card1PhysicalAttack = document.getElementById("card1PhysicalAttack");
let card1PhysicalDefense = document.getElementById("card1PhysicalDefense");
let card1MagicalAttack = document.getElementById("card1MagicalAttack");
let card1MagicalDefense = document.getElementById("card1MagicalDefense");
let card1Image = document.getElementById("card1Image");
let card2Name = document.getElementById("card2Name");
let card2HealthPoints = document.getElementById("card2HealthPoints");
let card2PhysicalAttack = document.getElementById("card2PhysicalAttack");
let card2PhysicalDefense = document.getElementById("card2PhysicalDefense");
let card2MagicalAttack = document.getElementById("card2MagicalAttack");
let card2MagicalDefense = document.getElementById("card2MagicalDefense");
let card2Image = document.getElementById("card2Image");

message.innerHTML = "Please draw, Player 1";

function draw() {
  drawButton.disabled = true;
  message.innerHTML = "Player 1 is drawing...";
  let card1 = Math.round(Math.random() * 16);
  setTimeout(function() {
    card1Name.innerHTML = "Name: " + goodCard[card1].name;
    card1HealthPoints.innerHTML =
      "Health Points: " + goodCard[card1].healthPoints;
    card1PhysicalAttack.innerHTML =
      "Physical Attack: " + goodCard[card1].physicalAttack;
    card1PhysicalDefense.innerHTML =
      "Physical Defense: " + goodCard[card1].physicalDefense;
    card1MagicalAttack.innerHTML =
      "Magical Attack: " + goodCard[card1].magicalAttack;
    card1MagicalDefense.innerHTML =
      "Magical Defense: " + goodCard[card1].magicalDefense;
    card1Image.src = goodCard[card1].img;
    message.innerHTML = "Player 2 is drawing...";
    setTimeout(function() {
      let card2 = Math.round(Math.random() * 22);
      card2Name.innerHTML = "Name: " + badCard[card2].name;
      card2HealthPoints.innerHTML =
        "Health Points: " + goodCard[card2].healthPoints;
      card2PhysicalAttack.innerHTML =
        "Physical Attack: " + badCard[card2].physicalAttack;
      card2PhysicalDefense.innerHTML =
        "Physical Defense: " + badCard[card2].physicalDefense;
      card2MagicalAttack.innerHTML =
        "Magical Attack: " + badCard[card2].magicalAttack;
      card2MagicalDefense.innerHTML =
        "Magical Defense: " + badCard[card2].magicalDefense;
      card2Image.src = badCard[card2].img;
      attack1Button.disabled = false;
      attack2Button.disabled = true;
    }, 1000);
  }, 1000);
}

function attack1() {
  attack1Button.disabled = true;
  attack2Button.disabled = false;
}

function attack2() {
  attack2Button.disabled = true;
  drawButton.disabled = false;
}
