function getComputerChoice() {

  let comp = Math.random()
  let comp_choice = "No Choice"
  console.log(comp)

  if (comp < .33) {
    comp_choice = "rock"
  }
  else if (comp < .66) {
    comp_choice = "paper"
  }
  else {
    comp_choice = "scissors"
  }
  console.log(comp_choice)
  return comp_choice
}

function getHumanChoice() {
  choice = (prompt("rock, paper, scissors?").toLowerCase())
  console.log(choice)
  return choice
}

function playRound(humanChoice, computerChoice) {

  let outcome = ""
  let outcome_num = -1
  if (humanChoice===(computerChoice)) {
    outcome = "tie"
    outcome_num =  2
  }
  else if ((humanChoice === ("rock") && computerChoice===("scissors")) ||
           (humanChoice===("paper") && computerChoice===("rock")) ||
           (humanChoice===("scissors") && computerChoice===("paper"))) {

    outcome = "win"
    outcome_num = 1
  }
  else if ((humanChoice===("rock") && computerChoice===("paper")) ||
           (humanChoice===("paper") && computerChoice===("scissors")) ||
           (humanChoice===("scissors") && computerChoice===("rock"))) {

  outcome = "lose"
  outcome_num = 0
}

  console.log("You " + outcome + " against " +computerChoice)
  return outcome_num
}


function playGame() {
  let humanScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {

    let i = getComputerChoice()
    let j = getHumanChoice()

    let outcome = playRound(i, j)

    if (outcome == 1) {
      humanScore += 1
    }
    else if (outcome == 2) {
      humanScore += 1
      computerScore += 1
    }
    else if (outcome == 0) {
      computerScore += 1
    }
  }
  let winner = ""
  if (humanScore > computerScore) {
    winner = "YOU!"
  }
  else if (computerScore > humanScore) {
    winer = "COMPUTER!"
  }
  else {
    winner = "TIE!"
  }

  console.log("THE WINNER IS " + winner)
}
playGame()