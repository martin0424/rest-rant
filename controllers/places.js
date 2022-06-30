const places = require('../models/places');

// eslint-disable-next-line import/order
const router = require('express').Router();

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.post('/', (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect ('/places');
});

router.get('/', (req, res) => {
  res.render('places/index');
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    res.render('places/show', { places: places[id], id });
  }
});

router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    res.render('places/edit', { place: places[id] });
  }
});

router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places[id] = req.body
    res.redirect(`/places/${id}`);
  }
});

module.exports = router;
