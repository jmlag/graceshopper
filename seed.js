const db = require('./server/db');
const User = require('./server/db/models/user');
const Package = require('./server/db/models/package');
const Review = require("./server/db/models/review");
const OrderHistory = require("./server/db/models/orderHistory");
const Cart = require("./server/db/models/cart");
const CartItem = require("./server/db/models/cartItem");
const Promise = require("bluebird");
const axios = require('axios');

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
  { name: "News Add-on",
    imageUrl: "/images/products/news.png",
    price: 9.99,
    description: "Catch on what's happening around the globe! This add-on contains Unrestricted speed access to top news websites! All at half the data-cost!. " },
  { name: "Social Add-on",
    imageUrl: "/images/products/social.png",
    price: 4.99,
    description: "Catch on your friends and family! You can stay updated on the the most current memes and gossip! This add-on contains Unrestricted speed access to top social websites! All at half the data-cost!." },
  { name: "Cinema Add-on",
    imageUrl: "/images/products/cinema.png",
    price: 14.99,
    description: "Watch your favorite movies and shows with these popular websites! This add-on contains Unrestricted speed access to top cinema websites! All at half the data-cost!." },
    { name: "Video Add-on",
    imageUrl: "/images/products/videostreaming.png",
    price: 4.99,
    description: "With this add-on you can watch all the cat videos your heart desires(with extra 10Gb add-ons :).This add-on contains Unrestricted speed access to top video streaming websites! All at half the data-cost!." },
    { name: "Market Add-on",
    imageUrl: "/images/products/market.png",
    price: 4.99,
    description: "Shop! Shop! Shop! Buy anything you need with this add-on. This add-on contains Unrestricted speed access to top market websites! All at half the data-cost!." },
    { name: "Music Add-on",
    imageUrl: "/images/products/music.png",
    price: 4.99,
    description: "Listen to the todays top tunes with your streaming service of choice! This add-on contains Unrestricted speed access to top music websites! All at half the data-cost!." },
    { name: "Research Add-on",
    imageUrl: "/images/products/research.png",
    price: 4.99,
    description: "Write a paper, learn something new or just casually browse and learn random facts This add-on contains Unrestricted speed access to info news websites! All at half the data-cost!." },
    { name: "Search Add-on",
    imageUrl: "/images/products/search.png",
    price: 4.99,
    description: "All your searching needs with this package! This add-on contains Unrestricted speed access to top search engine websites! All at half the data-cost!." },
    { name: "10 Gb",
    imageUrl: "/images/products/10gb.png",
    price: 9.99,
    description: "Add 10Gbs of highspeed internet instantaneously!" },
];

const reviews = [
  {  score: 1,
      date: Date.now(),
      content: "This internet package ruined my life, I would give it 0 stars if I could!!!!" },
  {  score: 5,
      date: Date.now(),
      content: "Bought it for my girlfirend and she hasn't complained." },
  {  score: 3,
      date: Date.now(),
      content: "it's ok" },
];


const seed = () => (
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(packages.map(pkg =>
    Package.create(pkg))
  )))
  // .then(() =>
  // Promise.all(reviews.map(review =>
  //   Review.create(review))
  // ))
  // .then(() => {
  //   return Promise.all([Review.findAll(), User.findById(1), User.findById(3), User.findById(5)]);
  // })
  // .spread( (reviews, usr1, usr3, usr5) => {
  //   return Promise.all([ reviews[0].setUser(usr1), reviews[1].setUser(usr3), reviews[2].setUser(usr5) ]);//associate reviews with user
  // })
  // .then( reviews => {
  //   return Promise.all( [...reviews, Package.findAll() ] );
  //   // returns [review1, review2, ..., review_n, [pkg1, pkg2, ..., pkg_n] ]
  // })
  // .then( arr => {
  //   return Promise.all( arr[3].map( (pkg, i) => arr[i].setPackage(pkg) ))
  //   //associate reviews with package
  // } )
  // .then(() => {
  //   return Promise.all([Cart.create(), Cart.create(), Cart.create()]);
  // })
  // .then(carts => {
  //   return Promise.all([carts, User.findById(2), User.findById(4), User.findById(6) ])
  // })
  // .then( arr => {
  //   return Promise.all(arr[0].map((cart,index) => {
  //       return cart.setUser(arr[index+1]);
  //     }))
  //   })
  // .then(e => console.log("=============", e))
  // to seed db with orderHistory, make a post request with an object like this
  /*
    {
      "userId": 1,
      "cartItems": [
        {
          "packageId": 1,
          "quantity": 2,
          "price": 1000
        },
        {
          "packageId": 2,
          "quantity": 1,
          "price": 2000,
          "renewDay": "Fri Jul 28 2017 15:14:43 GMT-0500 (Central Standard Time)"
        }
      ]
    } 
    */
//   .catch(console.error)
// );

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
