const express = require('express');
const port = 2424;
const cors = require('cors');
const app = express();

const db=require("./config/db")
const singup=require("./model/schema")
const productable=require("./model/productschema");
const producttable = require('./model/productschema');
app.use(express.json());
app.use(cors());


app.post('/signup', async (req, res) => {
    try {
        const data = await singup.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/login', async (req, res) => {
    const { email } = req.query;

    try {
        const user = await singup.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Return user data or a success message
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post('/product',async(req,res)=>{
    const productdata=await productable.create(req.body);
    res.send(productdata)
})

app.get('/product', async (req, res) => {
    try {
        const products = await producttable.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await producttable.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/product', async (req, res) => {
    try {
        const products = await producttable.find().limit(4); // Limit the results to 4 products
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});






app.listen(port, () => {
    console.log("Server started at port " + port);
});
