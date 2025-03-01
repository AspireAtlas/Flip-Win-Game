let player1Choice = null;
let player2Choice = null;

function choose(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }
}

function flipCoin() {
    if (player1Choice === null || player2Choice === null) {
        alert("Both players must choose Heads or Tails!");
        return;
    }

    let ran1 = Math.floor(Math.random() * 2) + 1; // Generates 1 (Heads) or 2 (Tails)
    let ran2 = Math.floor(Math.random() * 2) + 1;

    // Updating images based on random values
    document.getElementById("player1-coin").setAttribute("src", `./images/coin${ran1}.png`);
    document.getElementById("player2-coin").setAttribute("src", `./images/coin${ran2}.png`);

    let result;

    if (ran1 === player1Choice && ran2 === player2Choice) {
        result = "It's a tie!";
    } else if (ran1 === player1Choice) {
        result = "Player 1 wins!";
    } else if (ran2 === player2Choice) {
        result = "Player 2 wins!";
    } else {
        result = "No one wins!";
    }

    document.getElementById("result").innerText = result;
}
