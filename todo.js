const todoForm = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),

const ToDo_LS = 'toDos';


function loadtoDos() {
    const toDos = localStorage.getItem();
    if(toDos === null){

    }else{
        
    }
    
}


function init() {
    loadToDos();
}

init();