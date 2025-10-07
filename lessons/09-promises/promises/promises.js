/* Promises in JavaScript */

/* Explaination with real life example and example explain */
/*
    Scenario:
        You are building a website for a company that sells products.
        You need to create a function that will fetch the products from the database and display them on the website.
        The function will take two arguments: a callback function and a delay time.
        The callback function will be called after the delay time has passed.
        The callback function will take the products as an argument and display them on the website.
*/

/* Example with callback function */

const products = [
  {
    name: "Product 1",
    price: 100,
  },
  {
    name: "Product 2",
    price: 200,
  },
  {
    name: "Product 3",
    price: 300,
  },
  {
    name: "Product 4",
    price: 400,
  },
  {
    name: "Product 5",
    price: 500,
  },
  {
    name: "Product 6",
    price: 600,
  },
  {
    name: "Product 7",
    price: 700,
  },
  {
    name: "Product 8",
    price: 800,
  },
  {
    name: "Product 9",
    price: 900,
  },
  {
    name: "Product 10",
    price: 1000,
  },
];
/* Example */

// function fetchProducts(callback, delay) {
//     console.log("_____________Fetching Products___________________");
//     setTimeout(() => {
//         callback(products);
//     }, delay);
//     console.log("_____________Fetching Products End___________________");
// }

// fetchProducts(function(products) {
//     console.log(products);
// }, 1000);

/* Promise */
/* 
    Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

/* Promise States */
/* 
    Pending
    Fulfilled
    Rejected
*/

/* Promise Methods */
/* 
    then
    catch
    finally
*/

/* Promise Example with resolve and reject */

const promise = new Promise((resolve, reject) => {
  /* Promise is resolved */
  setTimeout(() => {
    resolve(products);
  }, 1000);
})
  .then((products) => {
    console.log(products);

  })
  .catch((error) => {
    console.log(error);
  });

/* Promise Example with resolve and reject */

const promise2 = new Promise((resolve, reject) => {
  /* Promise is rejected */
  setTimeout(() => {
    reject("Product not fetched");
  }, 2000);
})
  .then((products) => {
    console.log(products);
  })
  .catch((error) => {
    console.log(error);
  });

// promise2.then((products) => {
//     console.log(products);
// });



//
