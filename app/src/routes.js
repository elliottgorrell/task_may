const { log } = require('./utils');
const Page = require('./db/models/page');

module.exports = (app) => {
  app.get('/', async (req, res) => {
    Page.findOne({ route: '/' }, (err, page) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        return res.end('<html><body>Couldn\'t find the page</body></html>');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(page.html);
    });
  });
};
