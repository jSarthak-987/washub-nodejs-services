'use strict';

const express = require('express');
const bodyParser = require('body-parser');

require('./connection/sequelize-connection');
const serviceSubTypesRouter = require('./routes/servicesTypesRoutes');
const serviceTypesRouter = require('./routes/servicesTypesRoutes');
// const kfserviceProvidersRouter = require('./routes/kfServiceProvidersRoutes');

require('dotenv').config();

const APP_PORT = process.env.APP_PORT || 3000;
const KAFKA_CLIENT_ID = process.env.KAFKA_CLIENT_ID;
const KAFKA_BROKERS = process.env.BROKERS.split(",");

const kfConfig = {
    clientId: KAFKA_CLIENT_ID,
    brokers: KAFKA_BROKERS
};

const kafkaProducer = require('./connection/kafka-connection')(kfConfig).producer;
const kafkaConsumer = require('./connection/kafka-connection')(kfConfig).consumer;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

connection.authenticate()
            .then(() => {
                console.log("Connection Established Successfully!");
                app.use('/api/v1/servicetypes', serviceTypesRouter());
                app.use('/api/v1/servicesubtypes', serviceSubTypesRouter());
                // app.use('/api/v1/serviceproviders', kfserviceProvidersRouter(kfProducer));
                console.log("Routes Established Successfully!");
            })
            .catch((err) => console.error("Error While Establishing Connection: " + err));


app.listen(APP_PORT);