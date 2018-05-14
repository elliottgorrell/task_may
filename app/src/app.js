const express = require('express');
const { log } = require('./utils');
const app = express();

// Setup Database
require('./dbConfig');

// Bootstrap the application routes
require('./routes')(app);

app.listen(80, () => log.info('Example app listening on port 80'));

module.exports = app;
