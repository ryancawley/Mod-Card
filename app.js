// update variables to include attack and defense attributes
let drawButton = document.getElementById("drawButton");
let message = document.getElementById("message");
let card1Name = document.getElementById("card1Name");
let card1PhysicalAttack = document.getElementById("card1PhysicalAttack");
let card1PhysicalDefense = document.getElementById("card1PhysicalDefense");
let card1MagicalAttack = document.getElementById("card1MagicalAttack");
let card1MagicalDefense = document.getElementById("card1MagicalDefense");
let card1Image = document.getElementById("card1Image");
let card2Name = document.getElementById("card2Name");
let card2PhysicalAttack = document.getElementById("card2PhysicalAttack");
let card2PhysicalDefense = document.getElementById("card2PhysicalDefense");
let card2MagicalAttack = document.getElementById("card2MagicalAttack");
let card2MagicalDefense = document.getElementById("card2MagicalDefense");
let card2Image = document.getElementById("card2Image");

const goodCard = [
  {
    name: "Barding",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Beorning",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Dunedain",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Dwarf",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Eagle",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Ent",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Gondorian",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Grey-Elf",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "High-Elf",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Hobbit",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Huorn",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Numenorean",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Pukel Man",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Ranger",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Raven",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Rohirrim",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Wizard",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  }
];

const badCard = [
  {
    name: "Attack Troll",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Balrog",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Barrow-Wight",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Black Numenorean",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Cave Troll",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Corsair",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Crebain",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Dead Man of Dunharrow",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Dragon",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Drummer Troll",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Dunlending",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Easterling",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Goblin",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Haradrim",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Kraken",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Mumakil",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Nazgul",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Orc",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Spider",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Uruk-Hai",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Warg",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Warg-Rider",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    name: "Winged Beast",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  }
];

message.innerHTML = "Please draw, Player 1";

function draw() {
  drawButton.disabled = true;
  message.innerHTML = "Player 1 is drawing...";
  let card1 = Math.round(Math.random() * 2);
  setTimeout(function() {
    card1Name.innerHTML = "Name: " + goodCard[card1].name;
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
      let card2 = Math.round(Math.random() * 2);
      card2Name.innerHTML = "Name: " + badCard[card2].name;
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

/*       setTimeout(function() {
        if (goodCard[card1].level > badCard[card2].level) {
          alert("Player 1 Wins!");
        } else if (badCard[card2].level > goodCard[card1].level) {
          alert("Player 2 Wins!");
        } else if ((goodCard[card1].level = badCard[card2].level)) {
          alert("It's a Tie!");
        }, 1000)
        }; */

// which buttons to disable and when
// draw button disabled until end of attack round: drawButton.disabled = false;
