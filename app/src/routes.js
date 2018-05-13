const { log } = require('./utils');

module.exports = (app) => {
  app.get('/api/demo', async (req, res) => {
    return res.status(500).json({ data: 'hey there' });
  });
};
