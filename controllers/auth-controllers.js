const express = require('express');
const Result = require("../models/result-model")

const home = async (req, res) => {
    try {        
        res.status(200).send("welcome to routerdeuduqb");
    } catch (error) {
        res.status(400).send("page not found");
    }
};

const register = async (req, res) => {
    try {        
        console.log(req.body);
        const {username, branch, college, examination, regno, result} = req.body;

        const ifResultExist = await Result.findOne({regno});
        if(ifResultExist) {
           return res.status(400).json({msg:"result already exist"});
        }

        const resultCreated = await Result.create({username, branch, college, examination, regno, result});
        res.status(200).json({message : resultCreated})
    } catch (error) {
        res.status(500).json({message : "internal server errror"});
    }
};

const result = async (req, res) => {
    try {        
        console.log(req.body);
        const {regno} = req.body;

        const ifResultExist = await Result.findOne({regno});
        if(!ifResultExist) {
           return res.status(400).json({msg:"result already exist"});
        }

        // const resultCreated = await Result.create({username, branch, college, examination, regno, result});
        res.status(200).json({ ifResultExist })
    } catch (error) {
        res.status(500).json({message : "internal server errror"});
    }
};


module.exports = {home, register, result};