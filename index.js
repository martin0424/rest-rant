const express = require('express');
const dotenv = require('dotenv');
const req = require('express/lib/request');

dotenv.config();
const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine)

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  let places = []
  res.render('places/index')
})

app.get('/', (_req, res) => {
  res.render('Hello world!');
});

app.get('*', (_req, res) => {
  res.render('error404');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
