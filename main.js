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
    newDiv.classList.remove("hide")
    waitingList.push(nameInput.value)
    if (nameInput.value) {
        listContainer.classList.remove("hide")
        const listItem = document.createElement("li")
        listItem.innerText = nameInput.value
        namesList.appendChild(listItem)
        // add remove button function to each item
        nameInput.value = ""
        // } else {
        //     console.log("working")
        // }
    }
}

const createLists = (listLength) => {
    const teamList = document.createElement("ul")
    const teamAmount = document.getElementById("number-input").value
    const runLoop = Math.floor(listLength / teamAmount)
    const newerDiv = document.createElement("div")
    const teamNumber = document.createElement("h4")
    teamNumber.innerText = "Team"
    newerDiv.appendChild(teamNumber)
    for (let i = 0; i < runLoop; i++) {
        const randomIndex = Math.floor(Math.random() * waitingList.length)
        console.log(randomIndex)
        const nameToAdd = waitingList.splice(randomIndex, 1)
        const newItem = document.createElement("li")
        newItem.innerText = nameToAdd
        teamList.appendChild(newItem)
        const waitingListItems = document.querySelectorAll(".waiting-list li")
        console.log(waitingListItems)
        waitingListItems[randomIndex].remove()
        console.log(waitingList)
    } 
    newerDiv.appendChild(teamList)
    teamList.classList.add("list-style")
    newDiv.appendChild(newerDiv)
}

const createWaitingList = () => {
    newDiv.appendChild(namesList)
    newDiv.classList.add("hide", "col", "col-md-6", "remBtn")
    bigRow.appendChild(newDiv)
    namesList.classList.add("waiting-list")
}

const createBtn = () => {
    const newAddBtn = document.createElement("button")
    newAddBtn.classList.add("btn", "btn-primary")
    namesList.appendChild(newAddBtn)
    const attributeFunction = document.createAttribute('onclick')
    attributeFunction.value = `addRemaining()`
    const attributeId = document.createAttribute('id')
    attributeId.value = `add-remaining-btn`
    newAddBtn.setAttributeNode(attributeFunction)
    newAddBtn.setAttributeNode(attributeId)
    newAddBtn.innerText = "Add Remaining"
    namesList.appendChild(newAddBtn)
}

// How many names do we have ? DONE
// How many teams to we want ? DONE
// Check if it's odd.. Ask if we want even teams or not? checkbox NOT DONE 
    
    
const generate = () => {
    const checkEven = document.getElementById("even-option").value
    const listLength = waitingList.length
    const teamAmount = document.getElementById("number-input").value
    for (let i = 0; i < teamAmount; i++){
        createLists(listLength)
    }
    if (waitingList.length === 0) {
        namesList.remove()
    } else {
        createBtn()
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

