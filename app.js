// update variables to include attack and defense attributes
let button = document.getElementById("button");
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
    Name: "Barding",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Beorning",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Dunedain",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Dwarf",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Eagle",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Ent",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Gondorian",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Grey-Elf",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "High-Elf",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Hobbit",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Huorn",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Numenorean",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Pukel Man",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Ranger",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Raven",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Rohirrim",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Wizard",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  }
];

const badCard = [
  {
    Name: "Attack Troll",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Balrog",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Barrow-Wight",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Black Numenorean",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Cave Troll",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Corsair",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Crebain",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Dead Man of Dunharrow",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Dragon",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Drummer Troll",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Dunlending",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Easterling",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Goblin",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Haradrim",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Kraken",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Mumakil",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Nazgul",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Orc",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Spider",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Uruk-Hai",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Warg",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Warg-Rider",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  },
  {
    Name: "Winged Beast",
    physicalAttack: 1,
    physicalDefense: 1,
    magicalAttack: 1,
    magicalDefense: 1,
    img: ""
  }
];

message.innerHTML = "Please draw, Player 1";

function draw() {
  button.disabled = true;
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
      setTimeout(function() {
        if (goodCard[card1].level > badCard[card2].level) {
          alert("Player 1 Wins!");
        } else if (badCard[card2].level > goodCard[card1].level) {
          alert("Player 2 Wins!");
        } else if ((goodCard[card1].level = badCard[card2].level)) {
          alert("It's a Tie!");
        }

        button.disabled = false;
      }, 1000);
    }, 1000);
  }, 1000);
}

/* Races: Alphabetical

*/
