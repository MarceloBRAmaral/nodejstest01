const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Nothing at the server for the moment...');
});

var port = 3000;
var host = 'localhost';
var server = app.listen(port, host, () => {
    console.log("We're live at %s ", server.address().port);
})