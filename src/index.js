
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const router = require('./routes/router');

app.use('/medic_health',router)

app.listen(port, ()=>{
    console.log('BACKEND RUNNING ON ' + port);
})