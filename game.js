const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "", //computer hand
}

const hands = [...document.querySelectorAll('.select img')];

//First function
function handSelection() {
 
game.playerHand = this.dataset.option;
console.log(game.playerHand);
hands.forEach(hand => hand.style.boxShadow = "");
this.style.boxShadow = '0 0 0 4px yellow';
}

//third function
function aiChoice () {
//bedzie losowac z img (const hands)
const aiHand = hands[Math.floor(Math.random()*3)]
.dataset.option
return aiHand;
}
//to powyzej mozesz rowniez zapisac w ten sposob:
//const aiHand =
//return hands[Math.floor(Math.random()*3)].dataset.option

//forth function
function checkResult(player, ai) {
    //console.log(player, ai);
if(player === ai) {
    return 'draw'
} else if((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
    return 'win'
} else  {return 'loss'}
}

//Result publication
function publishResult (player, ai, result) {
    document.querySelector('[data-summary="your-choice"]')
    .textContent = player;

    document.querySelector('[data-summary="ai-choice"]')
    .textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if(result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins; 
        document.querySelector('[data-summary="who-win"]').textContent = "You won!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses; 
        document.querySelector('[data-summary="who-win"]').textContent = "Computer won :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws; 
        document.querySelector('[data-summary="who-win"]').textContent = "Draw";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }
}

//last function
function endGame() {
    document.querySelector(`[data-option= "${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

//navigate function
function startGame() {
    //jezeli game.playerHand zwraca true (bo pusty string zwraca false) to wejdz do srodka i wykonaj alert
    //return zakancza funkcje i wykonuje to co jest po prawej stronie 
if(!game.playerHand) {
    return alert("choose the hand!!!")
}

game.aiHand = aiChoice();
const gameResult = checkResult(game.playerHand, game.aiHand)
console.log(gameResult);
publishResult(game.playerHand, game.aiHand, gameResult);
endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)




