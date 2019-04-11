const faker = require('faker');
const data = require('./index.js');
const Camp = require('./Camp.js');

data.db.on('error', console.error.bind(console, 'connection error:'));
data.db.once('open', () => {
  console.log('connected i am connected');
});

const sampleData = [];
for (let i = 0; i < 100; i += 1) {
  let campers = []
  let randomNumber = Math.floor(Math.random() * 20) * 5
  for (let i = 0; i < randomNumber; i += 1){
    campers.push({
      name: faker.name.firstName(),
      image: faker.image.avatar(),
      votes: faker.random.boolean(),
    });
  }
  const sampleObject = {
    newId: i,
    campsite: {
      name: faker.lorem.words(4),
      verified: faker.random.boolean()
    },
    host: {
      name: faker.name.findName(),
      image: faker.image.avatar(),
    },
    body: faker.lorem.paragraphs(4,'\n'),
    campers: campers,
  };
  sampleData.push(sampleObject);
}

const insertSampleCamps = () => {
  Camp.create(sampleData)
    .then(() => data.database.disconnect())
    .catch(err => (err));
};

insertSampleCamps();
