// ******** DECLARATION OF VARIABLES ********
let waitingList = []
const listContainer = document.createElement("div")
let namesList = document.createElement("ul")
const inputContainer = document.getElementById("input-container")
const bigRow = document.getElementById("top-row")
const newDiv = document.createElement("div")
const nameInput = document.getElementById("name-input")
const teamContainer = document.createElement("div")

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
    }
}

const createLists = (listLength) => {
    const teamList = document.createElement("ul")
    const teamAmount = document.getElementById("number-input").value
    const runLoop = Math.floor(listLength / teamAmount)
    const newerDiv = document.createElement("div")
    newerDiv.classList.add("team-item")
    const teamHead = document.createElement("h4")
    teamHead.innerText = "Team"
    newerDiv.appendChild(teamHead)
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
    teamContainer.appendChild(newerDiv)
}

const createWaitingList = () => {
    newDiv.appendChild(namesList)
    newDiv.classList.add("hide", "col", "col-md-6", "col2", "d-flex", "flex-column", "align-middle")
    bigRow.appendChild(newDiv)
    namesList.classList.add("waiting-list")
}

const createAddRemBtn = () => {
    const newAddBtn = document.createElement("button")
    newAddBtn.classList.add("btn", "btn-warning", "mt-5")
    const attributeFunction = document.createAttribute('onclick')
    attributeFunction.value = `addRemaining()`
    const attributeId = document.createAttribute('id')
    attributeId.value = `add-remaining-btn`
    newAddBtn.setAttributeNode(attributeFunction)
    newAddBtn.setAttributeNode(attributeId)
    newAddBtn.innerText = "Add Remaining"
    namesList.appendChild(newAddBtn)
}

const createResortBtn = () => {
    const newResetBtn = document.createElement("button")
    const inputDiv = document.getElementById("input-div")
    newResetBtn.classList.add("btn", "btn-outline-warning")
    const attributeFunction = document.createAttribute('onclick')
    attributeFunction.value = `resortApp()`
    const attributeId = document.createAttribute('id')
    attributeId.value = `resort-btn`
    newResetBtn.setAttributeNode(attributeFunction)
    newResetBtn.setAttributeNode(attributeId)
    newResetBtn.innerText = "Try Again"
    newDiv.appendChild(newResetBtn)
}

const createResetBtn = () => {
    const resetBtn = document.createElement("button")
    const btnWrapper = document.getElementById("btn-wrapper")
    resetBtn.classList.add("btn", "btn-outline-warning")
    const attributeFunction = document.createAttribute('onclick')
    attributeFunction.value = `resetApp()`
    const attributeId = document.createAttribute('id')
    attributeId.value = `reset-btn`
    resetBtn.setAttributeNode(attributeFunction)
    resetBtn.setAttributeNode(attributeId)
    resetBtn.innerText = "Reset"
    btnWrapper.appendChild(resetBtn)
}   

const generate = () => {
    newDiv.appendChild(teamContainer)
    teamContainer.classList.add("d-flex", "justify-content-between")
    const listLength = waitingList.length
    const teamAmount = document.getElementById("number-input").value
    if (teamAmount <= listLength) {
        for (let i = 0; i < teamAmount; i++){
            createLists(listLength)
        }
        if (waitingList.length === 0) {
            namesList.remove()
        } else {
            createAddRemBtn()
        }
        createResetBtn()
    } else {
        alert("Add More Names.")
    }
}

const resortApp = () => {

}

const resetApp = () => {
    waitingList = []
    bigRow.removeChild(newDiv)
    namesList = document.createElement("ul")
    createWaitingList()

}

const addRemaining = () => {
    for (let i = 0; i < waitingList.length; i++) {
        const ulItems = document.querySelectorAll(".team-item ul")
        // console.log(ulItems[i].childNode.length)
        const randomIndex = Math.floor(Math.random() * ulItems.length)
        const remItem = waitingList[i]
        ulItems[randomIndex].innerHTML += remItem
    }
    document.querySelector(".waiting-list").innerHTML = ""
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
inputContainer.appendChild(listContainer)
createWaitingList()

