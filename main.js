// ******** DECLARATION OF VARIABLES ********
const waitingList = []
const listContainer = document.createElement("div")
const namesList = document.createElement("ul")
const inputContainer = document.getElementById("input-container")
const bigRow = document.getElementById("sz")
const newDiv = document.createElement("div")

// ******** DECLARATION OF FUNCTIONS ********

const addName = () => {
    newDiv.classList.remove("hide")
    const inputName = document.getElementById("name-input").value
    waitingList.push(inputName)
    listContainer.classList.remove("hide")
    console.log(waitingList)

    const listItem = document.createElement("li")
    listItem.innerText = inputName
    namesList.appendChild(listItem)
}

const createOneList = () => {
    // console.log(listLength)
    const teamList = document.createElement("ul")
    const teamAmount = document.getElementById("number-input").value
    console.log(teamAmount)
    const runLoop = Math.floor(4 / teamAmount)// original array length hardcorded - problem with scope
    console.log(runLoop)
    for (let i = 0; i < runLoop; i++) {
        // console.log(i)
        const randomIndex = Math.floor(Math.random() * waitingList.length - 1)
        // console.log(waitingList.length)
        // console.log(randomIndex)
        const nameToAdd = waitingList.splice(randomIndex, 1)// change splice to method that wont mutate original array
        // console.log(nameToAdd)
        console.log(nameToAdd[0])
        const newItem = document.createElement("li")
        newItem.innerText = nameToAdd
        teamList.appendChild(newItem)
    } 
    const newerDiv = document.createElement("div")
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

// ******** INITIALIZATION ********

listContainer.classList.add("hide")
createWaitingList()
inputContainer.appendChild(listContainer)

