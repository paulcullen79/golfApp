// var http = require('http')

//const data = [{"Curr":"27","Prior":"29","+/-":"+2","Team Name":"Pauls-Balls","Amount Won":"$10,103,910","$ From First":"-$2,192,709","$ From 78th":"$1,310,576"},{"Curr":"54","Prior":"64","+/-":"+10","Team Name":"Jordan Spieth - simply the best!","Amount Won":"$9,242,536","$ From First":"-$3,054,083","$ From 78th":"$449,202"},{"Curr":"100","Prior":"104","+/-":"+4","Team Name":"The Clare Savages","Amount Won":"$8,380,245","$ From First":"-$3,916,374","$ From 78th":"-$413,089"},{"Curr":"341","Prior":"334","+/-":"-7","Team Name":"Tipperary Stonethrowers","Amount Won":"$5,137,472","$ From First":"-$7,159,147","$ From 78th":"-$3,655,862"},{"Curr":"353","Prior":"319","+/-":"-34","Team Name":"Premier County","Amount Won":"$5,056,707","$ From First":"-$7,239,912","$ From 78th":"-$3,736,627"}]
// const userAction = async () => {
//     const response = await fetch('http://localhost:3000/golfpool-standings');
//     const myJson = await response.json()
//     return myJson
//   }



const data = userAction()
console.log(data)

console.log('Test')
const dateEl = document.querySelector("#date")

const date = moment().calendar()
dateEl.innerHTML = date

const tableEl = document.querySelector("#table1")
//const row = document.createElement("tr").innerHTML = ("test")

var tableBody = document.createElement('tbody')

const tableHeaders = ['Name', 'Position', 'Move', 'Team Name', 'Amount Won']
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

// Create table to display data
if (data.length > 0) {
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
} else {
    const date = document.getElementById('standings')
    var error = document.createElement('p')
    error.innerHTML = ('Error: No data to display')
    date.appendChild(error)
}
