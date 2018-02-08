'use strict';

var express = require('express'),
    cors = require('cors'),
    app = express(),
    server = require('http').createServer(app),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// initialize route mapping to which controller
var route = require('./routes/default-route')
route(app)

// set server port
server.listen(port)

console.log(`server run on : ${port}`)