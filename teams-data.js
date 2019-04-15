// use npm table-scraper to get data from golf pool standings
// based on team names 


const getTeamsData = (names) => {
    const teamsData = []
    scraper = require('table-scraper')
    scraper
        .get('http://www.leosgolfpool.com/StandingsYTD')
        .then(tableData => {
            const data = Object.values(tableData[0])    // extract first array of objects=
            // search array of objects for teamNames strings
            // if match add to teamsData array
            data.find(obj => {                
                for (i = 0; i < names.length; i++) {
                    if (obj['Team Name'] === names[i]) {
                        teamsData.push(obj)
                    }
                } 
            })
        })
        .catch(err => console.log('Error: could not get data'))
            
    return teamsData
}

module.exports = getTeamsData;

