const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? '0{hour}':hour}:${
        minutes < 10 ? `0{minutes}`:minutes 
    }:${second < 10 ? `0${second}`:second}`;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();