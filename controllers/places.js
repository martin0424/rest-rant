const router = require('express').Router();

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.get('/', (req, res) => {
  res.render('places/index');
});

module.exports = router;
