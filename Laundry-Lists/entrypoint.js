'use strict';

const express = require('express');
const bodyParser = require('body-parser');

require('./connection/connection');
require('dotenv').config();

const laundryListRoutes = require('./routes/laundryListRoutes');

const port = process.env.APP_PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

connection
            .authenticate()
            .then(() => {
                console.info("Connection Established Successfully!")
                app.use('/api/v1/laundry', laundryListRoutes());
                console.info("Routes Created Successfully!")
            })
            .catch((err) => console.error("Error : " + err));

app.listen(port);