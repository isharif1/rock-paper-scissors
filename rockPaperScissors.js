const getUserChoice = userInput => {
  userInput= userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors'){
    return userInput;
  }
  else {
    return console.log('Please enter valid option');
  }
};

const getComputerChoice = computerInput => {
  computerInput = Math.floor(Math.random() * 3);
  switch (computerInput) {
    case 0 :
     computerInput = 'rock' ;
      break;
    case 1 :
      computerInput = 'paper';
      break;
    case 2:
      computerInput = 'scissors';
      break;
      }
  return computerInput;
};

const determineWinner = (userChoice ,computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was tie';
  }
  if (userChoice === 'rock') {
    if  (computerChoice === 'paper'){
       return 'Computer Won!';
    } else {
      return 'You Won!';
    }
   }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'Computer Won!';
      } else  {
        return 'You Won!';
      } 
      
    }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer Won!';
    } else {
      return 'You Won!';
    }
  }
  };
function playGame() {
  const userChoice =  getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  
  console.log(`You Played: ${userChoice}`);
  
  console.log(`Computer Played:${computerChoice}`); 
  
 console.log(determineWinner(userChoice, computerChoice));
  
  
  };

playGame();





  


