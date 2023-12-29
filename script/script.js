
let saveButton = document.querySelector(".save-btn")
saveButton.addEventListener("click", () => {
    let todoInput = document.querySelector(".to-do-input").value;
    let todoDate = document.querySelector(".to-do-date").value;


    let newDisplay = document.createElement("p");

    newDisplay.innerHTML = `${todoInput}:  ${todoDate}`;

    document.querySelector('.display').appendChild(newDisplay)

    document.querySelector(".to-do-input").value = '';
    document.querySelector(".to-do-date").value = '';

});



