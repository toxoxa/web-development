'use strict';
const
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    redis = require('redis'),
    client = redis.createClient(),
    serverPort = 3000;

app.use(express.static('client'));

app.listen(serverPort, () => console.log('Server start'));

client.on('error', function(err) {
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', function(req, res) {
    if(req.body.action === 'feedback') {
        //TODO Записывать фидбек в редис
    }
});
