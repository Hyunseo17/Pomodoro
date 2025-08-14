const bells = new Audio('./sounds/Golden-Ringtone.wav');
const Btn = document.querySelector('.btn')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

let myInterval
let isRunning = false;
let total = 0;

const appTimer = () => {
    // check if the program is running already
    if(!isRunning){
        isRunning = true;
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
        // ??????
        myInterval = setInterval(updateSeconds, 1000)
    } else{
        isRunning = false;
        Btn.innerHTML = "resume";
        container.appendChild(reset);

        clearInterval(myInterval);
    }
}
Btn.addEventListener('click', appTimer);