const axios = require('axios');
const express = require('express');
const app = express();

// serve files from the public directory
// app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
})

app.use(express.static('public'))