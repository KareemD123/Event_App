// Importing the express module into a variable called express
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const eventRouter = require('./routes/event')
// Initialize our express server and store it in a variable called app
const app = express()

// CORS to allow for our frontend to send HTTP requests to backend
app.use(cors())
// bodyparser to parse the JSON body data from incoming request
app.use(bodyParser.json())

// Connecting our router to the / path in main server.js
app.use('/', eventRouter)

// Define our port as 3000
const PORT = 3000
// Mounting our server to a port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})


