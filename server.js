const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan')
const ensureLoggedIn = require('./config/ensureLoggedIn');
const bodyParser = require('body-parser')


require('dotenv').config()
require('./config/database')

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

app.use('/api/users', require('./routes/api/users'));

app.use('/api/posts', ensureLoggedIn, require('./routes/api/posts'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
