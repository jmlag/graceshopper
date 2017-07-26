const db = require('./server/db');
const User = require('./server/db/models/user');
const Package = require('./server/db/models/package');
const Review = require("./server/db/models/review");
const OrderHistory = require("./server/db/models/orderHistory");
const Subscription = require("./server/db/models/subscription");
const Cart = require("./server/db/models/cart");
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

const orderHistories = [
  { date: Date("October 13, 2014 11:13:00"),
    cost: 13.99 },
  { date: Date("May 29, 2016 23:19:29"),
    cost: 111.99 },
  { date: Date("December 25, 2017 16:43:55"),
    cost: 80.99 },
  { date: Date("October 13, 2010 11:13:00"),
    cost: 14.95 },
  { date: Date("May 29, 2010 23:19:29"),
    cost: 112.95 },
  { date: Date("December 25, 2010 16:43:55"),
    cost: 81.95 },
];

const subscriptions = [
  { renewDay: 13,
    cost: 13.99 },
  { renewDay: 13,
    cost: 14.95 },
  { renewDay: 29,
    cost: 112.95 },
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
  .then(() =>
  Promise.all(orderHistories.map(orderHistory =>
    OrderHistory.create(orderHistory))
  ))
  .then(() =>
  Promise.all(subscriptions.map(subscription=>
    Subscription.create(subscription)
  )))
  .then(() => {
    return Promise.all([Review.findAll(), User.findById(1), User.findById(3), User.findById(5)]);
  })
  .spread( (reviews, usr1, usr3, usr5) => {
    return Promise.all([ reviews[0].setUser(usr1), reviews[1].setUser(usr3), reviews[2].setUser(usr5) ]);
  })
  .then( reviews => {
    return Promise.all( [...reviews, Package.findAll() ] );
    // returns [review1, review2, ..., review_n, [pkg1, pkg2, ..., pkg_n] ]
  })
  .then( arr => {
    return Promise.all( arr[3].map( (pkg, i) => arr[i].setPackage(pkg) ))
  } )
  // .then(e => console.log("=============", e))
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
