const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017:27017/e-comm');
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('products',productSchema);
    const data = await product.find();
    console.log(data);
    connectDB();
}
app.listen(6000);