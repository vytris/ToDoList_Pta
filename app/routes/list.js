module.exports = (app) => {
    const db = require('../../config/db');
  
    app.get('/list', (req, res) => {
      res.render('list');
    });
  
    app.get('/items', (req, res) => {
      db.ref('/list').once('value').then((snapshot) => {
        res.send(snapshot.val());
      });
    });
  
    app.post('/list', (req, res) => {
      db.ref('/list').push(req.body);
      res.redirect('/list');
    });
  }