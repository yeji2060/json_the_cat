const { fetchBreedDescription } = require('./breedFetcher');
const breedInput = process.argv.slice(2);

fetchBreedDescription(breedInput, (error,desc) => {
  if (error) {
    console.log('Error fetch details', error);
  } else {
    console.log(desc);
  }
});


