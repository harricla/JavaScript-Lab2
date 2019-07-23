// Arrow function expression Step 1
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
const damage = randomDamage();
console.log(damage);

// Arrow Function Step 2
const randNum = () => {
  return Math.floor(Math.random() * 2);
};
function chooseOption(randNum) {
  return (randNum = 0 ? "Opt1" : "Opt2");
  console.log(chooseOption(true));
  console.log(chooseOption(false));
}
// Function Expression
const attackPlayer = function(health) {
  return logHealth(health() - randomDamage);
};

const logHealth = (player, health) => {
  console.log("player health: ${health}");
};
// // Arrow Function

const logDeath = (winner, loser) => {
  console.log("winner defeated loser");
};
// true or false
const isDead = health => {
  return health <= 0;
};

// // Function Declaration
function fight() {
    const player1 = "Mitch" ;
    const player2 = "Adam" ;
    const player1Health: 100;
    const player2Health: 100;
    while (true) {
        let attacker = chooseOption(player1, player2) {
        if (attacker === player1){
            player2Health = attacker;
            logDeath(player1, player2);
            break;
        } else {
            player1Health === attackPlayer(player1Health){
                logHealth(player1, player1Health); {
                    if (isDead(player1Health));
                    logDeath(player2, player1);
                    break;
                }
            }

        }
      return fight;
      
}
 {

    }
        console.log(player1) ;
        console.log(player2) ;
}
