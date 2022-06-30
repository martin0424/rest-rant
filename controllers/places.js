const router = require('express').Router();

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('POST /places');
});

router.get('/', (req, res) => {
  res.render('places/index');
});

module.exports = router;
