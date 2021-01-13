const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour}:${minutes}:${second}`;
}


function init(){
    getTime();
}

init();