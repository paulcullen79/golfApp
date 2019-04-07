

const request = require('request');

request('http://localhost:3000/index.html', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});


