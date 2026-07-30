// Think of app.js as building the car where we are assembling the engine, steering wheel,seats, brakes etc.

const express = require('express'); // Importing the Express library beacuse without it node won't know what is Express

const app = express(); // Here, we are creating an express application 

const authRoute = require('./routes/auth.routes')
const userRoute = require('./routes/user.routes')
const messageRoute = require('./routes/message.routes')

app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Welcome to Doppio!!!");
});

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/messages', messageRoute)


module.exports = app; // This ensures that we are making app.js available for other files 
