const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Friend = require('../models/friend');

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => Friend.create([{
      name: 'Anne',
      county: 'dorset'
    },{
      name: 'Brian',
      county: 'essex'
    },{
      name: 'Carol',
      county: 'hampshire'
    },{
      name: 'Derrick',
      county: 'lancashire'
    },{
      name: 'Elle',
      county: 'merseyside'
    },{
      name: 'Fred',
      county: 'wiltshire'
    },{
      name: 'Gail',
      county: 'north-wales'
    },{
      name: 'Harry',
      county: 'surrey'
    }]))
    .then(friends => console.log(`${friends.length} friends created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
