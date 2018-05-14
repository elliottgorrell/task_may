const { log } = require('./utils');
const Page = require('./db/models/page');

module.exports = (app) => {
  app.get('/', async (req, res) => {
    Page.find({route: '/^\//'}, (err, pages) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        return res.end('<html><body>Couldn\'t find the page</body></html>');
      } else {
        log.info(`Length of pages ${pages.length}`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<html><body>hi there</body></html>');
      }
    });
  });
};
