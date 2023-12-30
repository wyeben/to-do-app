
let saveButton = document.querySelector(".save-btn")
saveButton.addEventListener("click", () => {
    let todoInput = document.querySelector(".to-do-input").value;
    let todoDate = document.querySelector(".to-do-date").value;


    let newDisplay = document.createElement("p");
    newDisplay.classList.add('display-line');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerText = 'delete';

    newDisplay.innerHTML = `${todoInput}:  ${todoDate}`;

    let display = document.createElement('div');
    display.classList.add('display-div')
    display.appendChild(newDisplay);
    display.appendChild(deleteButton);

    let mainDisplay = document.querySelector('.display');
    mainDisplay.appendChild(display);

    document.querySelector(".to-do-input").value = '';
    document.querySelector(".to-do-date").value = '';

});



