
// Hard coded data used to display object data because GET request is not working
//const data = [{"Curr":"41","Prior":"27","+/-":"-14","Team Name":"Pauls-Balls","Amount Won":"$10,926,152","$ From First":"-$3,287,709","$ From 78th":"$1,096,503"},{"Curr":"78","Prior":"54","+/-":"-24","Team Name":"Jordan Spieth - simply the best!","Amount Won":"$9,829,649","$ From First":"-$4,384,212","$ From 78th":"$0"},{"Curr":"118","Prior":"100","+/-":"-18","Team Name":"The Clare Savages","Amount Won":"$9,144,045","$ From First":"-$5,069,816","$ From 78th":"-$685,604"},{"Curr":"303","Prior":"353","+/-":"+50","Team Name":"Premier County","Amount Won":"$6,548,020","$ From First":"-$7,665,841","$ From 78th":"-$3,281,629"},{"Curr":"364","Prior":"341","+/-":"-23","Team Name":"Tipperary Stonethrowers","Amount Won":"$5,740,390","$ From First":"-$8,473,471","$ From 78th":"-$4,089,259"}]

// GET request to localhost endpoint running server.js
const data = $.getJSON("http://localhost:3000/golfpool-standings")




// Getting date from moment.js
const dateEl = document.querySelector("#date")

const date = moment().calendar()
dateEl.innerHTML = date

// Sorting player names based on team name order for display in table
let teamNames = ["Jordan Spieth - simply the best!", "Premier County", "The Clare Savages", "Pauls-Balls", "Tipperary Stonethrowers"]
const playerNames = ['Graham', 'Johnie B', 'Philip', 'Paul', 'Ruairi']
let sortedPlayers = []
const playerSort = (array) => {
 
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
playerSort(data)

// Selecting table to display data
const tableEl = document.querySelector("#table1")
var tableBody = document.createElement('tbody')

// Table header names
const tableHeaders = ['Name', 'Position', 'Move', 'Team Name', 'Amount Won']


// Creating table contents
if (!data.length > 0) {
    const date = document.getElementById('standings')
    var error = document.createElement('p')
    error.innerHTML = ('Error: No data to display')
    date.appendChild(error)
} else {
    const rowHeader = tableEl.createTHead()
    const hRow = rowHeader.insertRow(-1)

    // Create table headers
    for (var i = 0; i < tableHeaders.length; i++) { 
        const cell = hRow.insertCell(-1)
        cell.innerHTML = `<b>${tableHeaders[i]}</b>`
    }
    
    // Create table data rows
    for (var i=0; i<data.length; i++) {
    
        var row = tableEl.insertRow(-1)
        
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
