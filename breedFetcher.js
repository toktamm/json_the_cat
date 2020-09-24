const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      //on line 9 we're calling the callback is defined in index.js 
      //with the parameters i.e error being "Breed not found!"
      callback("Breed not found!", null);   // because there's no data(description) ie an error so it's null
      // console.log(error);
    } else {
      callback(null, data[0]["description"]);
      // console.log(data[0]["description"]);
    }
  });
};

module.exports = { fetchBreedDescription };

