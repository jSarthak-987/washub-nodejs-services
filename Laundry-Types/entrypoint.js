'use strict';

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./connection/sequelize-connection');

const laundryTypesRouter = require('./routes/laundryTypesRoutes');

const APP_PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

connection.authenticate()
            .then(() => {
                console.log("Connection Established Successfully!");
                app.use('/api/v1/laundry', laundryTypesRouter());
                console.log("Routes Established Successfully!");
            })
            .catch((err) => console.error("Error While Establishing Connection: " + err));


app.listen(APP_PORT);