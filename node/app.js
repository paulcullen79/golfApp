
const getTeamsData = require('./teams-data')

const teamNames = ['Pauls-Balls', 'Tipperary Stonethrowers', 'Premier County', 'Jordan Spieth - simply the best!', 'The Clare Savages']
getTeamsData(teamNames)
const data = getTeamsData(teamNames)

 
const express = require('express')  
const app = express()

app.get('/golfpool-standings', (req, res) => {
    res.send(data)
})

const port = process.env.port || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

