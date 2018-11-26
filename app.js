let button = document.getElementById("button");
let message = document.getElementById("message");
let card1Name = document.getElementById("card1Name");
let card1Level = document.getElementById("card1Level");
let card1Image = document.getElementById("card1Image");
let card2Name = document.getElementById("card2Name");
let card2Level = document.getElementById("card2Level");
let card2Image = document.getElementById("card2Image");

const hand1 = [
  { name: "Wizard", level: 1, img: "./images/wizard.jpg" },
  { name: "Elf", level: 2, img: "./images/elf.jpg" },
  { name: "Ogre", level: 3, img: "./images/ogre.jpg" }
];

const hand2 = [
  { name: "Goblin", level: 1, img: "./images/goblin.jpg" },
  { name: "Witch", level: 2, img: "./images/witch.jpg" },
  { name: "Dragon", level: 3, img: "./images/dragon.jpg" }
];

message.innerHTML = "Please draw, Player 1";

function draw() {
  button.disabled = true;
  message.innerHTML = "Player 1 is drawing...";
  let card1 = Math.round(Math.random() * 2);
  setTimeout(function() {
    card1Name.innerHTML = "Name: " + hand1[card1].name;
    card1Level.innerHTML = "Level: " + hand1[card1].level;
    card1Image.src = hand1[card1].img;
    message.innerHTML = "Player 2 is drawing...";
    setTimeout(function() {
      let card2 = Math.round(Math.random() * 2);
      card2Name.innerHTML = "Name: " + hand2[card2].name;
      card2Level.innerHTML = "Level: " + hand2[card2].level;
      card2Image.src = hand2[card2].img;
      setTimeout(function() {
        if (hand1[card1].level > hand2[card2].level) {
          alert("Player 1 Wins!");
        } else if (hand2[card2].level > hand1[card1].level) {
          alert("Player 2 Wins!");
        } else if ((hand1[card1].level = hand2[card2].level)) {
          alert("It's a Tie!");
        }

        button.disabled = false;
      }, 1000);
    }, 1000);
  }, 1000);
}
