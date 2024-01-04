
let saveButton = document.querySelector(".add-btn")
saveButton.addEventListener("click", () => {
    let todoInput = document.querySelector(".to-do-input").value;
    let todoDate = document.querySelector(".to-do-date").value;


    let newDisplay = document.createElement("p");
    newDisplay.classList.add('display-line');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerText = 'delete';

    let checkIcon = document.createElement('button');
    checkIcon.classList.add('check-btn');
    checkIcon.innerText = '✓';

    newDisplay.innerHTML = `${todoInput}:  ${todoDate}`;

    let display = document.createElement('div');
    display.classList.add('display-div');
    display.appendChild(newDisplay);
    display.appendChild(checkIcon);
    display.appendChild(deleteButton);

    let mainDisplay = document.querySelector('.display');
    if(display === ''){
        alert('please enter to-do');
    }else{
        mainDisplay.appendChild(display);
    }

    document.querySelector(".to-do-input").value = '';
    document.querySelector(".to-do-date").value = '';

    deleteButton.addEventListener('click', () => {
        mainDisplay.removeChild(display);
    });

    checkIcon.addEventListener('click', () => {
        display.classList.toggle('completed');
    });

    

});




