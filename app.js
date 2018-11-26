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
  { name: "Elven Archer", level: 2, img: "./images/elf.jpg" },
  { name: "Elven Swordsman", level: 1, img: "" },
  { name: "Elven Glaiveman", level: 1, img: "" },
  { name: "Dwarven Halberd", level: 1, img: "" },
  { name: "Dwarven Shieldbearer", level: 1, img: "" },
  { name: "Dwarven Shortswordsman", level: 1, img: "" },
  { name: "Gondorian Ranger", level: 1, img: "" },
  { name: "Gondorian Warrior", level: 1, img: "" },
  { name: "Gondorian Guards", level: 1, img: "" },
  { name: "Rohirrim Axeman", level: 1, img: "" },
  { name: "Rohirrim Bowman", level: 1, img: "" },
  { name: "Rohirrim Spearman", level: 1, img: "" },
  { name: "Hobbit Shortswordsman", level: 1, img: "" },
  { name: "Hobbit Archer", level: 1, img: "" },
  { name: "Ent", level: 3, img: "" }
];

const hand2 = [
  { name: "Goblin Archer", level: 1, img: "" },
  { name: "Goblin Swordsman", level: 2, img: "" },
  { name: "Uruk-Hai Crossbowman", level: 1, img: "" },
  { name: "Corsair Mercenary", level: 1, img: "" },
  { name: "Mumakil", level: 1, img: "" },
  { name: "Attack Troll", level: 1, img: "" },
  { name: "Cave Troll", level: 1, img: "" },
  { name: "Drummer Troll", level: 1, img: "" },
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
