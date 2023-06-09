const { Client } = require("@elastic/elasticsearch");

// const elasticsearch = require('elasticsearch');


// const { Client } = require('@elastic/elasticsearch')
// const elasticClient = new Client({ node: 'http://localhost:9200' })

// const elasticClient = new Client({
//   hosts: [ 'http://localhost:9200']
//   });

// elasticClient.ping({
//     requestTimeout: 30000,
//     }, function(error) {
//     if (error) {
//     console.error('Cannot connect to Elasticsearch.');
//     } else {
//     console.log('Connected to Elasticsearch was successful!');
//     }
//     });


// require("dotenv").config({ path: ".elastic.env" });

const elasticClient = new Client({
  cloud: {
    id: 'elastic_store:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRiNWI4ZTIwOTAxYzM0NTgwOTljMGY3OGQzMTYwODM0ZiQxOTdlNzk4NTM4OGY0YTVlODkzMGQ2NGE5Zjk2MzQyZg==',
  },
  auth: {
    username: 'elastic',
    password: '95Lk6PgKNb4lMjfM0WQD3Feb',
  },
});




// const createIndex = async (indexName) => {
//   await elasticClient.indices.create({ index: indexName });
//   console.log("Index created");
// };

// createIndex("store");


const products = [
    {
      name: 'Smart Scale',
      description: 'Track your weight and health metrics with this smart scale.',
      price: 49.99
    },
    {
      name: 'Car Dash Cam',
      description: 'Capture your journey with this high-definition dash cam.',
      price: 89.99
    },
    {
      name: 'Noise-Canceling Headphones',
      description: 'Premium headphones that block out ambient noise.',
      price: 299.99
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with wireless Bluetooth connectivity.',
      price: 59.99
    },
    {
      name: 'Robot Vacuum Cleaner',
      description: 'Effortlessly clean your home with this smart vacuum cleaner.',
      price: 349.99
    },
    {
      name: 'Portable Power Bank',
      description: 'Compact power bank for charging your devices on the go.',
      price: 39.99
    }]

let timeInterval = null
let counter = 0
// products.forEach((eachProduct) => {
  

//   timeInterval = setTimeout(async ()=>{
//     const result = await elasticClient.index({
//       index: "store",
//       document: eachProduct,
//     });
//     counter += 1
//     console.log(eachProduct)

//   },3000)

  
// })




module.exports = elasticClient;