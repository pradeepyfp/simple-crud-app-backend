const Product = require('../models/product.model.js');



const getProducts = async (req, res) => {
    try{
        const produts = await Product.find({});
        res.status(200).json(produts);
    }
    catch (error) {
        res.status(500).json({message:error.message});

    }
}   //To get all products

const getProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }
    catch (error) {
        res.status(500).json({message:error.message});
    }

};  //To get the detail of one particular detail by it's id


const createProduct = async (req, res) => {
    try{
        const product =  await Product.create(req.body);
        res.status(200).json(product);
 
     }
     catch(error){
         res.status(500).json({message:error.message});
     }
};   //Create a database


const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};  //To update existing detail 



const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product not find"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});

    }
};  //To delete detail 

module.exports = {
     getProducts,
     getProduct,
     createProduct,
     updateProduct,
     deleteProduct,
}