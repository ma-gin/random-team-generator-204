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
    nameInput.value = ""
}

const createOneList = () => {
    // console.log(listLength)
    const teamList = document.createElement("ul")
    const teamAmount = document.getElementById("number-input").value
    console.log(teamAmount)
    const runLoop = Math.floor(4 / teamAmount)// original array length hardcorded - problem with scope
    console.log(runLoop)
    const newerDiv = document.createElement("div")
    for (let i = 0; i < runLoop; i++) {
        const randomIndex = Math.floor(Math.random() * waitingList.length - 1)
        const nameToAdd = waitingList.splice(randomIndex, 1)// change splice to method that wont mutate original array
        console.log(nameToAdd[0])
        const newItem = document.createElement("li")
        const teamNumber = document.createElement("h4")
        teamNumber.innerText = `Team ${i + 1}`
        newerDiv.appendChild(teamNumber)
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

const generate = () => {
    const listLength = waitingList.length
    const teamAmount = document.getElementById("number-input").value
    for (let i = 0; i < teamAmount; i++){
        createOneList()
    }
    // createList()

    // if (teamAmount < 3) {
        
    // } else if (teamAmount < 7) {
        
    // } else {

    // }
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

