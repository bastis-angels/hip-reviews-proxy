const connection = require('./index.js')
const Listing = require('./Listing.js');
const faker = require('faker');

const sampleListings = [];

let genBookedDates = function() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let dates = {};
  
  for (let i = 0; i < 100; i++) {
    let date = faker.date.future(2)
    let year = date.getFullYear();
    let monthNumber = date.getMonth();
    let month = months[monthNumber];
    let day = date.getDate();

    if (dates[year] === undefined) {
      dates[year] = {};
      dates[year][month] = [];
    } else if (dates[year][month] === undefined) {
      dates[year][month] = [];
    }
    if (dates[year][month].indexOf(day) === -1) {
      dates[year][month].push(day);
    }
  }
  return dates;
}

for (let i = 1; i <= 100; i++) {
  let listing = {
    listingId: i,
    host: faker.name.findName(),
    bookedDates: genBookedDates(),
    basePrice: faker.random.number({min: 10, max: 500}),
    occupancyFee: faker.random.number({min: 0, max: 30}),
    cleaningFee: faker.random.number({min: 0, max: 50})
  }

  sampleListings.push(listing);
}


Listing.insertMany(sampleListings, (err) => {
  if (err) console.log(err);

  console.log('disconnecting...');
  connection.close();
});

module.exports = sampleListings;