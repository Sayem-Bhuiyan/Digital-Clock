let secondElement = document.getElementById('seconds');
let secondText = secondElement.innerText;
let seconds = parseInt(secondText);

let minuteElement = document.getElementById('minutes');
let minuteText = minuteElement.innerText;
let minutes = parseInt(minuteText);

let hour = document.getElementById('hours').innerText;

const digitalWatch = () => {
 
    let seconds = setInterval(() => {
        
        seconds++;
        secondElement.innerText = seconds
        if(seconds === 60){
            seconds = 0;
        }
    }, 1000)

  

    return seconds;
}
let minute = setInterval(() => {
    minutes++;
    minuteElement.innerText = minutes;
    
    if(minutes === 60){
        minutes = 0;
    }
}, 60000)

digitalWatch()

