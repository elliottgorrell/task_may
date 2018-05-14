const mongoose = require('mongoose');

const { log } = require('./utils.js');

// db config
const mongoDB = 'mongodb://database:27017/elliott';
mongoose.connect(mongoDB, null)
  .catch((err) => {
    console.log(err);
  });
const db = mongoose.connection;

const Page = require('./db/models/page');

const createWelcomePage = () => {
  const page = new Page();
  page.html = `
  <html>
      <header><title>This is title</title></header>
      <body>
          Hello Vibrato!
      </body>
  </html>
  `;
  page.route = '/';
  page.save((err) => {
    if (err) {
      log.error(err);
    } else {
      log.info('root html saved to db');
    }
  });
};

createWelcomePage();
