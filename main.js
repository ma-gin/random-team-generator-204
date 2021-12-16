// ******** DECLARATION OF VARIABLES ********
const waitingList = []
const listContainer = document.createElement("div")
const namesList = document.createElement("ul")
const inputContainer = document.getElementById("input-container")
const bigRow = document.getElementById("sz")
const newDiv = document.createElement("div")
const nameInput = document.getElementById("name-input")

// ******** DECLARATION OF FUNCTIONS ********

const addName = () => {
    newDiv.classList.remove("hide")
    waitingList.push(nameInput.value)
    listContainer.classList.remove("hide")
    console.log(waitingList)

    const listItem = document.createElement("li")
    listItem.innerText = nameInput.value
    namesList.appendChild(listItem)
    // add remove button function to each item
    nameInput.value = ""
}

const createLists = (listLength) => {
    const teamList = document.createElement("ul")
    const teamAmount = document.getElementById("number-input").value
    const runLoop = Math.floor(listLength / teamAmount)
    console.log(runLoop)
    const newerDiv = document.createElement("div")
    let checker = false;
    for (let i = 0; i < runLoop; i++) {
        const randomIndex = Math.floor(Math.random() * waitingList.length - 1)
        const nameToAdd = waitingList.splice(randomIndex, 1)
        // console.log(nameToAdd[0])
        if (checker === false) {
            const teamNumber = document.createElement("h4")
            teamNumber.innerText = `Team ${i + 1}`
            newerDiv.appendChild(teamNumber)
            checker = true
        }
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
// Check if it's odd.. Ask if we want even teams or not? checkbox 
// Add random name to team 1 x times, run loop x times.
// Print team 1
// Add random name to team 2 x times, run loop x times.
    
    
const generate = () => {
    const checkEven = document.getElementById("even-option").value
    console.log(checkEven)
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

