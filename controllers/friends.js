const Friend = require('../models/friend');
const axios = require('axios');

function findLocalForce(req, res) {
  Friend.findOne({ name: req.params.id })
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
    .catch(err => console.log(err));
}

module.exports = {
  find: findLocalForce
};
