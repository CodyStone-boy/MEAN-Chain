const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./server/config/database');

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var api = require('./routes/api');

app.use(passport.initialize());

app.use('/api', api);