const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const chefDetails = require ('./data/chefDetails.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('join ranna ghor')
});

app.get('/categories', (req, res) =>{
    console.log(categories);
    res.send(categories);
})

app.get('/chefDetails',(req,res)=>{
    res.send(chefDetails);
})

app.get('/chefDetails/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedChefDetails = chefDetails.find(c=>c._id=== id);
    res.send(selectedChefDetails)
})

app.get('/categories/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(id == 0 ){
        res.send(chefDetails)
    }
    else{

        const CategoryChefDetails = chefDetails.filter(c=>parseInt(c.category_id) === id);
        res.send(CategoryChefDetails);
    }
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})
