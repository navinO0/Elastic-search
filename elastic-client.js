const { Client } = require("@elastic/elasticsearch");

// const elasticsearch = require('elasticsearch');



const elasticClient = new Client({
  cloud: {
    id: 'elastic_store:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRiNWI4ZTIwOTAxYzM0NTgwOTljMGY3OGQzMTYwODM0ZiQxOTdlNzk4NTM4OGY0YTVlODkzMGQ2NGE5Zjk2MzQyZg==',
  },
  auth: {
    username: 'elastic',
    password: '95Lk6PgKNb4lMjfM0WQD3Feb',
  },
});


// for creating index in elastic database

// const createIndex = async (indexName) => {
//   await elasticClient.indices.create({ index: indexName });
//   console.log("Index created");
// };

// createIndex("store");







module.exports = elasticClient;