// Importing the express module into a variable called express
const express = require('express')
const cors = require('cors')
// Initialize our express server and store it in a variable called app
const app = express()

app.use(cors())

// Defining our controller function
function helloWorld(request, response) {
    return response.send('Hello World!')
}
// Defining a GET / request
app.get('/hello', helloWorld)

// Routes:
// - GET /events - get Event List
// - POST /createEvent - create a new event
// - GET /search/:searchParam - filter/search
app.get('/events', getEventList)
app.post('/createEvent', createEvent)
app.get('/search/:searchParam', searchEvent)

// Controllers:
// - getEventList()
// - createEvent()
// - searchEvent()

function getEventList(request, response) {
    response.json(eventList)
}

function createEvent(request, response) {
    try {
        const newEvent = request.body // request.body will have the form data from frontend for new event
        eventList.push(newEvent) // add newEvent to our eventList
        response.status(200).json({message: "Successfully created event"})
    } catch (err) {
        response.status(400).json({message: err})
    }
}

function searchEvent(request, response) {
    const searchParam = request.params.searchParam
    // The filter below will return only the events whose name property match the search parameter
    const filteredEventList = eventList.filter(event => event.name == searchParam)
    response.json(filteredEventList)
}
// Model -- sample database
const eventList = [
    {name: 'Kick off', host: 'Roger', date: new Date('2020-04-17'), location: 'office'},
    {name: 'Picnic', host: 'Andrew', date: new Date('2021-01-07'), location: 'park'},
    {name: 'Barbecue', host: 'Bob', date: new Date('2019-09-27'), location: 'patio'},
    {name: 'Swimming', host: 'Oliver', date: new Date('2022-06-12'), location: 'lake'},
]






// Define our port as 3000
const PORT = 3000
// Mounting our server to a port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})


