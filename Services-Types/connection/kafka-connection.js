'use strict';

const { Kafka } = require('kafkajs');

module.exports = (kafakConfig) => {
    const kafka = new Kafka(kafakConfig);
    const producer = kafka.producer();
    const consumer = kafka.consumer();

    return {
        producer,
        consumer
    };
}