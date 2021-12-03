const button = document.getElementById("func-button");
const counter = document.getElementById("counter");
const result = document.getElementById("result");
const nicks = document.getElementsByName("nickname");
const values = document.getElementsByName("value");
const scores = document.getElementsByName("score");
button.addEventListener("click", start);
let count;
let nick;
while (nick == "" || nick == null) {
    nick = prompt("enter your name: ");
}
nicks[0].innerHTML = nick;

function start() {
    count = 0;
    counter.innerHTML = "0/3";
    result.innerHTML = "";
    values.forEach(item => item.innerHTML = 0);
    scores.forEach(item => item.innerHTML = 0);
    button.innerHTML = "make a roll";
    button.setAttribute("class", button.getAttribute("class").replace("btn-primary", "btn-warning"));
    button.removeEventListener("click", start);
    button.addEventListener("click", roll);
}

function roll()  
{
    values[0].innerHTML = Math.floor(Math.random() * 999);
    values[1].innerHTML = Math.floor(Math.random() * 999);
    let max = (Number(values[0].innerHTML) > Number(values[1].innerHTML) ? 0 : 1);
    if(values[0].innerHTML != values[1].innerHTML)
        scores[max].innerHTML = Number(scores[max].innerHTML) + 1;
    else scores.forEach(item => item.innerHTML = Number(item.innerHTML) + 1);
    count++;
    counter.innerHTML = count + "/3";
    if (count == 3) {
        if(scores[0].innerHTML != scores[1].innerHTML)
            result.innerHTML = "the winner is " + (Number(scores[0].innerHTML) > Number(scores[1].innerHTML) ? nicks[0].innerHTML : nicks[1].innerHTML);
        else result.innerHTML = "draw";
        button.innerHTML = "restart the game";
        button.setAttribute("class", button.getAttribute("class").replace("btn-warning", "btn-primary"));
        button.removeEventListener("click", roll);
        button.addEventListener("click", start);
    }
}