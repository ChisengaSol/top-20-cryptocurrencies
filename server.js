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
           // res.send()
           //console.log(currencies);
           res.json(currencies);
        }
    });



    //res.send("Hello world from server.js");
    console.log("I recieved a get request");
   //res.send("Helloo...");

    curr1 = {
        rank:"1",
        name: "Bitcoin",
        price:"100",
        marketCap: "200",
        hchange: "0.92"
    };
    curr2 = {
        rank:"2",
        name: "Therther",
        price:"399",
        marketCap: "100",
        hchange: "0.82"
    };

    //var currencies = [curr1, curr2];
    //var currencies = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
    //res.json(currencies);
    //res.json(currencies);
});

app.listen(3000);
console.log("Server running on port 3000");