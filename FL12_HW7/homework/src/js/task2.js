const MAX_RANDOM = 8,
      MAX_RANDOM_2 = 12,
      MAX_ATTEMPTS = 3;
    
let userContinue = true,   
    totalPrize = 0,
    attemptPrize = [100, 50, 25],
    guessed = false;
    
if(!confirm('Do you want to play a game?')) {
    alert('You did not become a billionaire, but can.');
} else {
    do {
        let randomNum = Math.floor(Math.random() * MAX_RANDOM);
        for(let i = 0, attempts = 3; i < MAX_ATTEMPTS; i++, attempts--) {
            let userNum = parseInt(prompt(`Choose a roulette pocket number from 0 to 8\nAttempts left: ${attempts}
Total prize: ${totalPrize}$\nPossible prize on current attempts: ${attemptPrize[i]}$`), 10);
            if(userNum === randomNum) {
                totalPrize += attemptPrize[i];
                alert(`Congratulation, you won! Your prize is: ${totalPrize}$.`);
                guessed = true;
                break;
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);            
            }
        }
        userContinue = confirm('Do you want to continue?');

        if(guessed && userContinue) {
            randomNum = Math.floor(Math.random() * MAX_RANDOM_2);
            for(let i = 0, attempts = 3; i < MAX_ATTEMPTS; i++, attempts--) {
                let userNum = parseInt(prompt(`Choose a roulette pocket number from 0 to 12\nAttempts left: ${attempts}
Total prize: ${totalPrize}$\nPossible prize on current attempts: ${attemptPrize[i]*2}$`), 10);
                if(userNum === randomNum) {
                    totalPrize += attemptPrize[i] * 2;
                    alert(`Congratulation, you won! Your prize is: ${totalPrize}$.`);
                    break;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);            
                }
            }
            userContinue = confirm('Do you want to continue?');
        }  
        if(!userContinue) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            userContinue = confirm('Do you want to continue?');
        }
    } while (userContinue);  
}    