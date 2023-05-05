const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Products = require('./db/Product');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/resister", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save()
    //resp.send("app is is working...!");
    result = result.toObject();
    delete result.password;
    resp.send(result)
})
app.post("/login", async (req, resp) => {
    //resp.send(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "No User Found" })
        }
    } else {
        resp.send({ result: "No User Found" })
    }

})

app.post("/add-product",async (req,resp)=>{
    let product = new Products(req.body);
    let result = await product.save();
    resp.send(result)
})

app.get("/products",async (req,resp)=>{
    let product = await Products.find();
    if(product.length>0){
        resp.send(product)
    }else{
        resp.send({result:"No Products found"})
    }
})

app.delete("/product/:id",async (req,resp)=>{
    const result = await Products.deleteOne({_id:req.params.id});
    resp.send(result);
});

app.get("/product/:id", async (req,resp)=>{
    let result = await Products.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"No Record found"})
    }
});
app.put("/product/:id",async (req,resp)=>{
    let result = await Products.updateOne(
        {_id: req.params.id},{$set : req.body}
    ) 
    resp.send(result)
});
app.listen(5000);
