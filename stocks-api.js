const fs = require('fs');
const path = require('path');
const express = require('express');

// create an express app 
const app = express();
const provider = require('./scripts/data-provider.js');
const stocks = provider.data;

// handle requests for static resources 
app.use('/static',  
express.static(path.join(__dirname,'public')));

// set up route handling 
const router = require('./scripts/stock-router.js'); 
router.handleAllStocks(app); 
router.handleSingleSymbol(app); 
router.handleNameSearch(app);      

// define the API routes 
// return all the stocks when a root request arrives 

// return just the requested stock  


// return all the stocks whose name contains the supplied text 

// Use express to listen to port 
let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});