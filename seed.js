const db = require('./server/db');
const User = require('./server/db/models/user');
const Package = require('./server/db/models/package');
const Review = require("./server/db/models/review");
const OrderHistory = require("./server/db/models/orderHistory");
const Promise = require("bluebird");

const users = [
    { email: "jdoe@email.com", password: "user1", isAdmin: false },
    { email: "msmith@email.com", password: "user2", isAdmin: false },
    { email: "user3@email.com", password: "user3", isAdmin: false },
    { email: "user4@email.com", password: "user4", isAdmin: false },
    { email: "user5@email.com", password: "user5", isAdmin: false },
    { email: "user6@email.com", password: "user6", isAdmin: false },
    { email: "admin@email.com", password: "admin1", isAdmin: true },
    { email: "nsa@fcc.gov", password: "password", isAdmin: true },
];

const packages = [
    { name: "Internet 10", 
      image: "http://www.drodd.com/images15/1-7.jpg", 
      price: 13.99, 
      description: "Browse, stay connected to the world, or keep in touch with family or friends." },
    { name: "Internet 11", 
      image: "http://www.drodd.com/images15/2-23.jpg", 
      price: 111.99, 
      description: "Our Internet goes to 11." },
    { name: "Internet 1000", 
      image: "http://www.drodd.com/images15/3-12.jpg", 
      price: 500.99, 
      description: "*not actually 1Gbps." }
];

const reviews = [
    {  score: 1,
       date: Date.now(),
       writtenReview: "This internet package ruined my life, I would give it 0 stars if I could!!!!" },
    {  score: 5,
       date: Date.now(),
       writtenReview: "Bought it for my girlfirend and she hasn't complained." },
    {  score: 3,
       date: Date.now(),
       writtenReview: "it's ok" },
];

const seed = () => (
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(packages.map(package =>
    Package.create(package))
  ))
  .then(() =>
  Promise.all(reviews.map(review =>
    Review.create(review))
  ))
  // .then(() => {
  //   return Promise.all([Review.findById(1), User.findById(1)]);
  // })
  // .spread( (rev, usr) => {
  //   return rev.setUser(usr);
  // })
  // .then(() => console.log("set association"))
  .catch(console.error)
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
