const bells = new Audio('./sounds/Golden-Ringtone.wav');
const Btn = document.querySelector('.btn')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')
const reset = document.createElement("button");
reset.textContent = "reset";
reset.className = "btn"

let myInterval
let isRunning = false;
let total = 0;

reset.addEventListener('click', () => {
    // Stop the countdown
    clearInterval(myInterval);
    isRunning = false;

    // Reset timer values
    total = 0; 
    min.textContent = "25"; // or whatever your default minutes are
    sec.textContent = "00";

    // Reset main button text
    Btn.innerHTML = "start";

    // Remove reset button
    reset.remove();
});


const appTimer = () => {
    // check if the program is running already
    if(!isRunning){
        isRunning = true;
        // removes reset button when unpausing
        reset.remove();
        // changes button from start -> pause
        Btn.innerHTML = "pause"

        // initialize the timer
        if(total === 0){
            total = Number.parseInt(min.textContent) * 60
        }
        

        const updateSeconds = () => {
            //Counts down the seconds on the timer
            total--;
            let minutesLeft = Math.floor(total/60);
            let secondsLeft = total % 60;

            min.textContent = `${minutesLeft}`;
            // ? ternery operator that acts like an if else statement
            sec.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

            if(minutesLeft === 0 && secondsLeft === 0){
                bells.play();
                //????????
                clearInterval(myInterval)
                isRunning = false;
                Btn.innerHTML = "start";
                total = 0;
            }
        }
        // setInterval runs the function repeatedly over 1000ms intervals (1 second)
        myInterval = setInterval(updateSeconds, 1000)
    } else{
        isRunning = false;
        Btn.innerHTML = "resume";
        const resetBtn = document.querySelector('.app-container');
        resetBtn.appendChild(reset);
        clearInterval(myInterval);
    }
}
Btn.addEventListener('click', appTimer);