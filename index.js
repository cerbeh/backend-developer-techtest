const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { port, dbURI } = require('./config/environment');
const routes = require('./config/routes');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { useNewUrlParser: true });

app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
