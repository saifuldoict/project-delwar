
const express = require ('express');
const cors = require ('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dotenv = require ('dotenv').config();


const app = express();
app.use (express.json());
app.use (express.urlencoded({extended : true}));
app.use(cors());




const uri = process.env.URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    console.log('the database is connected.');

    const db = client.db('CWD_JS_Course');

    const sliderCollection = db.collection('Sliders');

    const productCollection = db.collection('products');
    const orderCollection = db.collection('Orders');

    
    

    /*
    slider management

    */

   app.get('/api/get-sliders', async(req, res)=>{
    const result =await sliderCollection.find().toArray();
    res.send(result);
   })

   /*
    products management
    */
   app.get('/api/products', async(req, res)=>{
    const result =await productCollection.find().toArray();
    res.send(result) 
   });



   app.get('/api/latest-products', async(req, res)=>{
    const totalProducts = await productCollection.countDocuments();
    
    let skip = 0;

    if (totalProducts > 10){
      skip = totalProducts - 10;
    }
    else{
      skip =0;
    }

    const result = await productCollection.find().skip(skip).toArray();

    res.send(result);

   });

// find single product
   app.get('/api/get-product-by/:id', async(req, res)=>{
    const {id}= req.params;

    const result = await productCollection.findOne({_id : new ObjectId(id)});
    res.send(result);
   })


/*order management*/
app.post('/api/insert-new-order', async(req, res)=>{
  const data = req.body;
  const result = orderCollection.insertOne(data);
  res.send(result);

})


    app.listen(process.env.PORT,  ()=>{(`the server is running.`);
        console.log('The server is running');
    })

  } finally {
    
  }
}
run().catch(console.dir);


