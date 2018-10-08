const Friend = require('../models/friend');
const axios = require('axios');

function findLocalForce(req, res) {

  const name = req.params.id.charAt(0).toUpperCase() + req.params.id.slice(1);

  Friend.findOne({ name })
    .then(friend => {
      axios.get(`https://data.police.uk/api/forces/${friend.county}`)
        .then(response => {

          const contactDetails = {
            phone: response.data.telephone,
            name: response.data.name
          };

          return res.json(contactDetails);
        });
    })
    .catch(err => {
      res.status(500);
      console.log(err);
    });
}

module.exports = {
  find: findLocalForce
};
