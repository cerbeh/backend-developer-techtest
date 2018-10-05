const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Friend = require('../models/friend');

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => Friend.create([{
      name: 'anne',
      county: 'dorset'
    },{
      name: 'brian',
      county: 'essex'
    },{
      name: 'carol',
      county: 'hampshire'
    },{
      name: 'derrick',
      county: 'lancashire'
    },{
      name: 'elle',
      county: 'merseyside'
    },{
      name: 'fred',
      county: 'wiltshire'
    },{
      name: 'gail',
      county: 'north-wales'
    },{
      name: 'harry',
      county: 'surrey'
    }]))
    .then(friends => console.log(`${friends.length} friends created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
