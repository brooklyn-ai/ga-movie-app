
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express()
app.locals.favorites = "placeholder";

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.get('/favorites', (req, res) => res.render('pages/favorites'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



