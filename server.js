

const express = require('express')
var cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors())

const feedbackRoutes = require('./app/feedbackRoutes');
app.use('/api/feedbacks', feedbackRoutes);


const port = process.env.PORT || 3030;
app.listen(port,()=>console.log(`Listening to port ${port}`))