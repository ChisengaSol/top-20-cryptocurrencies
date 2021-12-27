//configure express server
const express = require('express');
const request = require('request');
//const path = require('path');
const app = express();

app.use(express.static(__dirname +'/public'));

app.get('/cryptocurrencies',(req,res) => {


    const request = require('request');
    request('https://api.coinstats.app/public/v1/coins?skip=0&limit=20', function (error, response, body) {
        //console.log(body);
        let currencies = JSON.parse(body);
        if(response.statusCode === 200){
           res.json(currencies);
        }
    });
});

// app.listen(3000);
// console.log("Server running on port 3000");

//start app by listening on heroku default port
const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
