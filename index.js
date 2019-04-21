// Script makes ajax request for golf pool data
// and creates a table displaying array object data


let data = []

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://paulsgolfpool.herokuapp.com//golfpool-standings",
    "method": "GET",
}

// jQuery AJAX call to server.js endpoint
$.ajax(settings).done(function (response) {
    data = response;
    playerSort(data)
    tableCreate(data)
})


// Getting date from moment.js
const dateEl = document.querySelector("#date")
const date = moment().calendar()
dateEl.innerHTML = date


// Sorting player names based on team name order in data array of objects
let sortedPlayers = []
const playerSort = (array) => {
    const teamNames = ["Jordan Spieth - simply the best!", "Premier County", "The Clare Savages", "Pauls-Balls", "Tipperary Stonethrowers"]
    const playerNames = ['Graham', 'Johnie B', 'Philip', 'Paul', 'Ruairi']
    
    for (let i=0; i<array.length; i++) {
        if (array[i]["Team Name"] === teamNames[0]) {
            sortedPlayers[i] = playerNames[0]
        } else if (array[i]["Team Name"] === teamNames[1]) {
            sortedPlayers[i] = playerNames[1]
        } else if (array[i]["Team Name"] === teamNames[2]) {
            sortedPlayers[i] = playerNames[2]
        } else if (array[i]["Team Name"] === teamNames[3]) {
            sortedPlayers[i] = playerNames[3]
        } else if (array[i]["Team Name"] === teamNames[4]) {
            sortedPlayers[i] = playerNames[4]
        }       
    }    
}


// Creating table contents
const tableCreate = (data) => {
    // Selecting table to display data
    const tableEl = document.querySelector("#table1")
    const tableBody = document.createElement('tbody')

    // Table header names
    const tableHeaders = ['Name', 'Position', 'Move', 'Team Name', 'Amount Won']

    if (!data.length > 0) {
        const date = document.getElementById('standings')
        const error = document.createElement('p')
        error.innerHTML = ('Error: No data to display')
        date.appendChild(error)
    } else {
        const rowHeader = tableEl.createTHead()
        const hRow = rowHeader.insertRow(-1)
    
        // Create table headers
        for (let i = 0; i < tableHeaders.length; i++) { 
            const cell = hRow.insertCell(-1)
            cell.innerHTML = `<b>${tableHeaders[i]}</b>`
        }
        
        // Create table data rows
        for (let i=0; i<data.length; i++) {
        
            let row = tableEl.insertRow(-1)
            
            var cell1 = row.insertCell(0)
            var newText = document.createTextNode(sortedPlayers[i])
            cell1.appendChild(newText)
        
            var cell2 = row.insertCell(1)
            var newText = document.createTextNode(data[i]["Curr"])
            cell2.appendChild(newText)
        
            var cell3 = row.insertCell(2)
            var newText = document.createTextNode(data[i]["+/-"])
            cell3.appendChild(newText)
        
            var cell4 = row.insertCell(3)
            var newText = document.createTextNode(data[i]["Team Name"])
            cell4.appendChild(newText)
        
            var cell5 = row.insertCell(4)
            var newText = document.createTextNode(data[i]["Amount Won"])
            cell5.appendChild(newText) 
        }
    }
}

