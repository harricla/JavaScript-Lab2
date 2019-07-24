// Arrow function expression Step 1
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// Arrow Function Step 2
const chooseOption = (Opt1, Opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? Opt1 : Opt2;
};

// Function Expression
const attackPlayer = function(health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// // Arrow Function

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// true or false
const isDead = health => {
  return health <= 0;
};

// // // Function Declaration
function fight() {
  const player1 = "Mitch";
  const player2 = "Adam";
  let player1Health = 100;
  let player2Health = 100;
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);

      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);

      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight();
