const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 

//mongoose.connect('mongodb://127.0.0.1:27017/g4gInsertManyEx');

mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.pll31kn.mongodb.net/?retryWrites=true&w=majority');


app.use(express.static('public'));
app.use(express.json()); 





// User model
const User = mongoose.model('User', {
    name: { type: String },
    age: { type: Number }
});

app.get('/users', async function (req, res) {
    try {
        const users = await User.find({}); 
        res.status(200).json({"msg": "data fetched successfully", users})
    } catch (e) {
        console.log(e)
    }
})

/*

// Function call
User.insertMany([
    { name: 'Thilak', age: 20 },
    { name: 'Kumar', age: 21 },
    { name: 'Singh', age: 22 }, 
    { name: 'Dabangg', age: 20 },
    { name: 'Kumar', age: 21 },
    { name: 'Singh', age: 22 },
    { name: 'Jabangg', age: 20 },
    { name: 'Kumar', age: 21 },
    { name: 'Singh', age: 22 },
    { name: 'Thilak', age: 20 },
    { name: 'Kumar', age: 21 },
    { name: 'Singh', age: 22 },
    { name: 'Dabangg', age: 20 },
    { name: 'Kumar', age: 21 },
    { name: 'Singh', age: 22 },
    { name: 'Jabangg', age: 20 },
    { name: 'Kumar', age: 21 },
    { name: 'Singh', age: 22 }
]).then(function () {
    console.log("Data inserted")  // Success
}).catch(function (error) {
    console.log(error)      // Failure
});

*/



app.listen('3000', function () {
    console.log('server up and running...')
})


