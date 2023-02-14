const inputElement = document.querySelector(".Input");
const listElement = document.querySelector(".List");
const addButton = document.querySelector(".Add-Btn");

const todos = []

function renderListElement(text) {
    if (listElement) {

        const listItem = document.createElement("li");
        listItem.className = "List-Element";

        listItem.textContent = text;
        listElement.appendChild(listItem);

        
    }
}


if (addButton) {
    addButton.addEventListener("click", function () {
        if (inputElement) {
            const input = inputElement.value;

            renderListElement(input);

            inputElement.value = "";
            todos.push(input);
            localStorage.setItem('todosKey', JSON.stringify(todos))
        }
    })
}