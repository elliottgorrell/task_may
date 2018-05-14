const mongoose = require('mongoose');
const Page = require('./db/models/page');
const { log } = require('./utils.js');

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

// db config
const mongoDB = 'mongodb://localhost:27017/elliott';
mongoose.connect(mongoDB, null)
  .catch((err) => {
    console.log(err);
  });
const db = mongoose.connection;

Page.findOne({ route: '/' }, (err, page) => {
  if (!page) {
    createWelcomePage();
  }
});

