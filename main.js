// ******** DECLARATION OF VARIABLES ********
const waitingList = []
const listContainer = document.createElement("div")
const namesList = document.createElement("ul")
const inputContainer = document.getElementById("input-container")

// ******** DECLARATION OF FUNCTIONS ********

const addName = () => {
    const inputName = document.getElementById("name-input").value
    waitingList.push(inputName)
    listContainer.classList.remove("hide")
    console.log(waitingList)

    const listItem = document.createElement("li")
    listItem.innerText = inputName
    namesList.appendChild(listItem)
}

const createWaitingList = () => {
    listContainer.appendChild(namesList)
    listContainer.classList.add("waiting-list")
}

const generate = () => {
    inputContainer.classList.add("hide")
    const teamAmount = document.getElementById("number-input").value
    // if (teamAmount < 3) {
        
    // } else if (teamAmount < 7) {
        
    // } else {

    // }
}

// ******** INITIALIZATION ********

listContainer.classList.add("hide")
createWaitingList()
inputContainer.appendChild(listContainer)

