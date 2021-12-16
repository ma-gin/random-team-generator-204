// ******** DECLARATION OF VARIABLES ********
const waitingList = []
const listContainer = document.createElement("div")
const namesList = document.createElement("ul")
const inputContainer = document.getElementById("input-container")
const bigRow = document.getElementById("sz")
const newDiv = document.createElement("div")
const nameInput = document.getElementById("name-input")

// ******** DECLARATION OF FUNCTIONS ********

const addNameToWaiting = () => {
    const newName = nameInput.value
    newDiv.classList.remove("hide")
    waitingList.push(newName)
    if (nameInput) {
        listContainer.classList.remove("hide")
        console.log(waitingList)
        const listItem = document.createElement("li")
        listItem.innerText = nameInput.value
        namesList.appendChild(listItem)
        // add remove button function to each item
        nameInput.value = ""
    } else {
        console.log("works")
    }
}

const createLists = (listLength) => {
    const teamList = document.createElement("ul")
    const teamAmount = document.getElementById("number-input").value
    const runLoop = Math.floor(listLength / teamAmount)
    console.log(runLoop)
    const newerDiv = document.createElement("div")
    const teamNumber = document.createElement("h4")
    teamNumber.innerText = "Team"
    newerDiv.appendChild(teamNumber)
    for (let i = 0; i < runLoop; i++) {
        const randomIndex = Math.floor(Math.random() * waitingList.length - 1)
        const nameToAdd = waitingList.splice(randomIndex, 1)
        const newItem = document.createElement("li")
        newItem.innerText = nameToAdd
        teamList.appendChild(newItem)
    } 
    newerDiv.appendChild(teamList)
    teamList.classList.add("list-style")
    newDiv.appendChild(newerDiv)
}

const createWaitingList = () => {
    newDiv.appendChild(namesList)
    newDiv.classList.add("hide")
    newDiv.classList.add("col")
    newDiv.classList.add("col-md-6")
    bigRow.appendChild(newDiv)
    namesList.classList.add("waiting-list")
}

// How many names do we have ? DONE
// How many teams to we want ? DONE
// Check if it's odd.. Ask if we want even teams or not? checkbox NOT DONE 
// Add random name to team 1 x times, run loop x times.
// Print team 1
// Add random name to team 2 x times, run loop x times.
    
    
const generate = () => {
    const checkEven = document.getElementById("even-option").value
    const listLength = waitingList.length
    const teamAmount = document.getElementById("number-input").value
    for (let i = 0; i < teamAmount; i++){
        createLists(listLength)
    }
}
// ******** EVENT LISTENERS ********

nameInput.addEventListener("keyup", (event) => { 
    if (event.keyCode === 13) {
        event.preventDefault()
        document.querySelector(".btn").click();
    }
})


// ******** INITIALIZATION ********

listContainer.classList.add("hide")
createWaitingList()
inputContainer.appendChild(listContainer)

