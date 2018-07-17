const axios = require('axios');
const YELPAPI = require('../db/config.js');

let getClosestWithinRadius = (loc, radius) => {
  let options = {
    headers: {
      'User-Agent': 'request',
      Authorization: 'Bearer ' + YELPAPI
    },
    params: {
      term: 'study spots',
      radius: radius,
      location: loc
    }
  };

  return axios
    .get(`https://api.yelp.com/v3/businesses/search`, options)
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getClosestWithinRadius = getClosestWithinRadius;
