const express = require('express');
const app = express();
const port = 3003;
const Listing = require('../db/Listing.js');
const cors = require('cors');
app.use(cors());
app.use('/listing/:listingId', express.static('public'));

app.get('/list/listing/:listingId', (req, res) => {
  Listing.find({listingId: req.params.listingId}, (err, listings) => {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.send(listings[0]);
    }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}...`));