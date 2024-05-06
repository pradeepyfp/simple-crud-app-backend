const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express()


//middleware
app.use(express.json());
app.use(express.urlencoded({extends: false}));


//routes
app.use('/api/products', productRoute);


app.get('/', (req,res)=>{
    res.send('Hello this port is running well on port 3000..');
});





//MongoDB Connection
mongoose.connect("mongodb+srv://Pradeep_testing:HbO5QCOIq867dwDb@cluster0.z12dcee.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to the database!');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000...');
    })
})
.catch(()=>{
    console.log('Connection failed');
});