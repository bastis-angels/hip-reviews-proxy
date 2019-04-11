const express = require('express');
const cors = require('cors');

const port = 3001;
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('../database/sequelize.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/listing/:id', express.static('public'));


// get all reviews for a specific location
app.get('/reviews/listing/:loc_id/', (req, res) => {
  sequelize.db.query(`SELECT * FROM reviews INNER JOIN users on (reviews.loc_id = ${req.params.loc_id} && users.user_id = reviews.user_id)`)
    .then(result => res.send(result[0].concat(result[1])));
});

// get images for each reviews
// get images seperately to optimize my rendering
app.get('/reviews/location/:loc_id/:review_id/images/', (req, res) => {
  sequelize.findImages(req.params.review_id, req.params.loc_id, (reviews) => {
    res.send(reviews);
  });
});

app.patch('/:loc_id/:review_id/:process', (req, res) => {
  if (req.params.process === '1') {
    sequelize.incrementHelpfulVotes(req.params.review_id, req.params.loc_id, () => {
      res.send();
    });
  } else {
    sequelize.decrementHelpfulVotes(req.params.review_id, req.params.loc_id, () => {
      res.send();
    });
  }
});

app.listen(port, () => console.log(`Listening to port ${port}`));
