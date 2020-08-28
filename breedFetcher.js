const request = require('request');

const breed = process.argv[2]

let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

// or instead of the line above we can write:
// let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("No results found!");
  } else if (error) {
    console.log(error);
  } else {
    console.log(data[0]["description"]);
  }
});


