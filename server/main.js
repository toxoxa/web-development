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

client.on('error', err => {
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', (req, res) => {
    debugger;
    if(req.body.action === 'feedback') {
        client.set(req.body.name, req.body.comment, (err, repl) => {
            if(err) {
                console.log(err);
            } else {
                console.log('comment recorded');
            }
        });
        res.send();
    }
});
