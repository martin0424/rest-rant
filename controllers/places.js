const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to Places');
});

module.exports = router;
