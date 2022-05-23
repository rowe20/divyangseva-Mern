require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = 5000;
const mongoose = require("mongoose");
const axios = require("axios");
const {encode, decode} = require('node-encoder');

const userModel = require("./models/users");

mongoose.connect(process.env.MONGOURL).then(() => console.log("MongoDB connection is up and running."));


//User Registration
app.post("/api/register",async (req,res) =>{
    const newUser = req.body;
    //Validating Input
    if(Object.keys(newUser).length == 4){
        if(newUser){
            //Checking if e-mail already exists
            const existing_user = await userModel.find({email : newUser.email});
            if(Object.keys(existing_user).length != 0){
                res.status(401);
                return res.json({data : "Email already taken."});
            }else{
                if(newUser.password){
                    //Password Encoding
                    newUser.password = encode(newUser.password);
                    if(userModel.create(newUser)){
                        res.status(201);
                        return res.json({data: "User registered successfully."});
                    }else{
                        res.status(500);
                        return res.json({data: "Internal Server Error."});
                    }
                }
            }
        }
    }else{
        res.status(400);
        return res.json({data : "Insufficient data."});
    }
    
});

//User Login
app.post("/api/login", async (req,res) =>{
    const usercred = req.body;
    //Validating input
    if(Object.keys(usercred).length == 2){
        if(usercred.password){
            //Encoding password before matching
            usercred.password = encode(usercred.password);
            const user = await userModel.findOne(usercred);
            if(user){
                res.status(200);
                return res.json({data : user.uname});
            }else{
                res.status(401);
                return res.json({data : "Invalid Credentials."});
            }
        }else{
            res.status(400);
            return res.json({data : "Password field is empty."})
        }
    }else{
        res.status(400);
        return res.json({data : "Insufficient data."});
    }
    
});

//Sports News
app.get("/api/news",async(req,res)=>{
    const news = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=" + process.env.SPORTSNEWSAPIKEY);
    if(news.data){
        res.status(200);
        return res.json({data : news.data.articles});
    }else{
        res.status(500);
        return res.json({data : "External API call failed."});
    }

});

//Weather Data
app.post("/api/weather", async(req,res) =>{
    const city = req.body.cityname;
    if(!city){
        res.status(400);
        return res.json({data : "City's name is missing in request."});
    }else{
        const weather = await axios.get("https://api.weatherapi.com/v1/current.json?key=" + process.env.WEATHERAPIKEY + "&q=\'" + city + "'&aqi=no");
        if(weather.data){
            res.status(200);
            return res.json({data : weather.data});
        }else{
            res.status(500);
            return res.json({data : "External API call failed."});
        }
    }

});

app.listen(port, () => console.log(`DivyangSeva app's backend listening on port ${port}.`))