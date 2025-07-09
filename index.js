function createDeck() {
    const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const cardColors = ['♠', '♥', '♦', '♣'];
    let deck = [];


    for (let number of cardNumbers) {
        for (let color of cardColors) {
            deck.push({ number: number, color: color});
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

let deck = createDeck();
deck = shuffleDeck(deck);
console.log(deck);

function dealCardToPlayer() {

}

let playerOneHand = { name: "Player One", hand: [] };
let playerTwoHand = { name: "Player Two", hand: [] };
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");

function giveCards() {
    for(let i = 0; i < 2; i++) {
        let cardToPlayerOne = deck.shift();
        playerOneHand.hand.push(cardToPlayerOne);

        let cardToPlayerTwo = deck.shift();
        playerTwoHand.hand.push(cardToPlayerTwo);
    }
    console.log(playerOneHand);
    console.log(playerTwoHand);
    console.log(deck);
}

function showCards() {
    for (let i = 0; i < playerOneHand.length, i++) {
        const div = document.createElement("div");
        div.classList.add("playerCards");
        div.textContent = `${number}, ${color}`;
    }

}