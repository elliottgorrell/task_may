const express = require('express');

const app = express();

// Bootstrap the application routes
require('./routes')(app);

app.listen(80, () => console.log('Example app listening on port 80'));

module.exports = app;
