const fastify = require("fastify")()

const elasticClient = require("./elastic-client");


const options = {
    host : '127.0.0.1',
    port : 3001
}


const verifyProductData = (req, reply,next) =>{
  let {name, description, price} = req.body 
  const priceCheck = !Number.isNaN(Number(price))
  if (typeof price === "string"){
      price = parseInt(price)
  }
  
  if (name !== undefined && description !== undefined && price !== undefined){
    if(priceCheck){
      next()
    } else{
      reply.status(400)
      reply.send("Price Error")
    }
  } else{
    reply.status(400)
    reply.send("In Adiquate Data")
  }
 
}

const connectFastify = async() => {
    try{
        fastify.listen(options,(err, port) => {
            if (err){
                console.log(`server error due to ${err.message}`)
            } else {
                console.log(`server started on port ${port}`)
            }
        })
    } catch(e){
        console.log(`server error due to ${e.error}`)
    }
}
connectFastify()


fastify.get("/products", async (req, reply) => {
    const result = await elasticClient.search({
      index: "store",
      query: { match_all: {} },
    });
  
    reply.send(result.hits.hits);
  });



  fastify.post("/products",{preHandler : verifyProductData}, async (req, reply) => {
    try{
    const result = await elasticClient.index({
      index: "store",
      document: req.body,
    });
    reply.send(result.result);
  }catch(e){
    console.log(e.message)
  }
  });



  fastify.get('/products/:id', async (req, reply) => {
    const { id } = req.params;
     try{
      const result = await elasticClient.get({
        index: 'store',
        id: id
      });
      reply.send(result);
    }catch (e){
      reply.status(404)
     reply.send("product not found")
    }
  
  });


  fastify.put("/products",{preHandler:verifyProductData}, async (req, reply) => {
    try{
    const result = await elasticClient.update({
        index: 'store',
        id: req.query.id,
        doc: req.body
      })
    reply.send(result.result);
    }catch(e){
      reply.status(404)
      reply.send("Product Not Found")
      
    }
  });







  fastify.delete("/products", async (req, reply) => {
    try{
    const result = await elasticClient.delete({
      index: "store",
      id: req.query.id,
    });
  
    reply.send(result.result);
  }catch(e){
reply.status(404)
reply.send("Product Not Found")    }
  });



  fastify.get("/products/search", async (req, reply) => {
    const result = await elasticClient.search({
      index: "store",
      query: { fuzzy: { name: req.query.query } },
    });

    if(result.hits.hits.length === 0){
      reply.send("the product that you have looking for is not found")
    }else{
        reply.send(result.hits.hits);
    }
  
    
  });