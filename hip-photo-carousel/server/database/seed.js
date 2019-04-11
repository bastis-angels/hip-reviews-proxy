const db  = require('./index.js');
const Listing = require('./Listing.js');
const faker = require('faker');
const mongoose = require('mongoose');

const sampleListings = () => {
  const listings = [];
  
  for (let i = 1; i <= 100; i++) {
    let images = [];
  
    for (let j = 0; j < 30; j++) {
  
      //images file
      images.push({
        'index' : j,
        'userId' : faker.random.number({min: 1, max: 100}),
        'imageURL' : `https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-${j + 1}.png`,
        'datePosted' : faker.date.past(),
        'location' : faker.random.words(4),
        'helpfulVotes' : faker.random.number({min: 1, max: 20})
      });
    };
    
    //listing file
    listings.push({
      '_id' : i,
      'elevation' : faker.random.number({min: 1000, max: 3000}),
      'weather' : faker.random.number({min: 50, max: 95}),
      'distance' : faker.random.number({min: 1, max: 10}),
      'images' : images,
    });
  }
  return listings;
}


const insertSampleListings = () => {
  Listing.create(sampleListings())
    .then(() => mongoose.connection.close());
};

insertSampleListings();