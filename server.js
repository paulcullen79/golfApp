// Script runs on a server as an ajax end point

// function imported from teams-data.js
const getTeamsData = require('./teams-data')

const teamNames = [ 'Pauls-Balls', 
                    'Tipperary Stonethrowers', 
                    'Premier County', 
                    'Jordan Spieth - simply the best!', 
                    'The Clare Savages']
const data = getTeamsData(teamNames)

const express = require('express') 
const cors = require('cors') 
const app = express()

app.use(cors())

app.get('/golfpool-standings', (req, res) => {
    res.send(data)
    console.log('serverTest')
    
})

const port = process.env.port || 3000
app.listen(port, () => console.log(`CORS enabled: Listening on port ${port}...`))