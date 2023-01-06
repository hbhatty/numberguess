let btn = document.querySelector("#btn");
let output = document.querySelector("#outputtext");
let val = document.querySelector("#userInput");
let random = [Math.floor(Math.random() * 1000)];
let task = 0;
let cool = random - 5;

btn.addEventListener("click", () => {
    let input = val.value;
    if(task == 3){
        alert(`The number is close to ${cool}`);
    }
    if (input == random){
        output.innerHTML = `You guessed right, your number was ${random}`;
        task++;
    } else if (input < random){
        output.innerHTML = "You guessed too low!"
        task++;
    };
    if (input > random){
        output.innerHTML = "you guessed too high!"
        task++;
    };
});
