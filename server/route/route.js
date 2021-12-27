// const express = require('express');
// const router = express.Router();

const { default: axios } = require("axios");

// const axios = require('axios');
// const postAPI = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';

// router.get('/',(req,res) => {
//     res.send("It works");
// });
axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10').then((res) => {
    console.log(response.data);
});