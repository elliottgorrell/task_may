const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '1mb' }));

// Bootstrap the application routes
require('./routes')(app);

app.listen(80, () => console.log('Example app listening on port 80') );

module.exports = app;
