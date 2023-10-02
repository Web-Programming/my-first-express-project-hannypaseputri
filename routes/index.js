var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hanny' });
});
router.get('/profil', function(req, res) {
  res.render('profil',
  {nama: 'Hanny', 'npm': 2226240149}
  );
});

module.exports = router;
