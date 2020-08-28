const { fetchBreedDescription } = require('./breedFetcher');

let breed = process.argv[2];

fetchBreedDescription(breed, (error, description) => {
  console.log(description);
});

