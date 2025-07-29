function getComputerchoice(){
    let choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    console.log(randomIndex);
    console.log(choices[randomIndex]);
    return choices[randomIndex];
}

const computerChoice = getComputerchoice()
