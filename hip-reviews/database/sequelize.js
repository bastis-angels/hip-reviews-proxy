const Sequelize = require('sequelize');
const user = require('./info.js');


const db = new Sequelize('user_reviews', user.username, user.password, {
  dialect: 'mysql',
});

const User = db.define('users', {
  user_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  avatar: Sequelize.STRING,
});

const Location = db.define('locations', {
  loc_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  loc_name: Sequelize.STRING,
});

const Review = db.define('reviews', {
  review_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: Sequelize.INTEGER },
  loc_id: { type: Sequelize.INTEGER },
  context: Sequelize.STRING,
  helpful: Sequelize.STRING,
});

const Image = db.define('images', {
  image_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  review_id: { type: Sequelize.INTEGER },
  loc_id: { type: Sequelize.INTEGER },
  image_url: Sequelize.STRING,
  image_description: Sequelize.STRING,
});

const saveLocation = (data, callback = () => {}) => {
  Location.sync()
    .then(() => Location.create(data)) // Now instantiate an object and save it:
    .then(res => callback(res))
    .catch(err => callback(err));
};

const saveUser = (data, callback = () => {}) => {
  User.sync()
    .then(() => User.create(data)) // Now instantiate an object and save it:
    .then(res => callback(res))
    .catch(err => callback(err));
};

const saveReview = (data, callback = () => {}) => {
  Review.sync()
    .then(() => Review.create(data)) // Now instantiate an object and save it:
    .then(res => callback(res))
    .catch(err => callback(err));
};

const saveImage = (data, callback = () => {}) => {
  Image.sync()
    .then(() => Image.create(data)) // Now instantiate an object and save it:
    .then(res => callback(res))
    .catch(err => callback(err));
};

const findReviews = (id, callback = () => {}) => {
  Review.sync()
    .then(() => Review.findAll({ sort: ['helpful', 'descending'], where: { loc_id: id } }))
    .then(reviews => callback(reviews))
    .catch(err => callback(err));
};
const findAllReviews = (callback = () => {}) => {
  Review.sync()
    .then(() => Review.findAll())
    .then(reviews => callback(reviews))
    .catch(err => callback(err));
};

const findImages = (revId, locId, callback = () => {}) => {
  Image.sync()
    .then(() => Image.findAll({ where: { review_id: revId, loc_id: locId } }))
    .then(images => callback(images))
    .catch(err => callback(err));
};

const incrementHelpfulVotes = (userId, locId, callback = () => {}) => {
  Review.sync()
    .then(() => Review.findOne({
      where: {
        user_id: userId,
        loc_id: locId,
      },
    }))
    .then(review => review.increment('helpful'))
    .then(() => callback());
};

const decrementHelpfulVotes = (userId, locId, callback = () => {}) => {
  Review.sync()
    .then(() => Review.findOne({
      where: {
        user_id: userId,
        loc_id: locId,
      },
    }))
    .then(review => review.decrement('helpful'))
    .then(() => callback());
};

module.exports = {
  db,
  saveLocation,
  saveUser,
  saveReview,
  saveImage,
  findReviews,
  findImages,
  findAllReviews,
  incrementHelpfulVotes,
  decrementHelpfulVotes,
};
