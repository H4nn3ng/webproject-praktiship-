const express = require('express');
const app = express();

// use express middleware for json
app.use(express.json());

// sample endpoint that give 204 no content response on post request
// and logs out the request body
app.post('/api/form', (req, res) => {
  console.log(req.body);
  res.sendStatus(204);
});

// listen to port 3000 (dev usage)
app.listen(3000);
