const request = require('request');

const breedInput = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedInput;

console.log(url);

request(url, (error, response, body) => {
  if (error) {
    console.log('Failed to request details:', error);
  } else {
    console.log('Body:', body);
    console.log('Type:', typeof body);
  }

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

  if (!data.length) {
    console.log("Breed is not found");
  } else {
    console.log(data[0].description);
  }
  
});

