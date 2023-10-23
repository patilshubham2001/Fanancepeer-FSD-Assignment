// Controllers/data.controller.js
// const { default: axios } = require('axios');
const DataModel = require('../Models/DataModel');
const fs = require('fs');
const path = require('path');

exports.uploadData = async (req, res) => {
   try {
    
        const fileData = req.file.buffer.toString('utf8');

        const jsonData = JSON.parse(fileData);

        const newData = new DataModel({ jsonData });
        await newData.save();
        res.status(200).json({ message: 'File uploaded and saved to MongoDB' });
   } catch (error) {
    res.status(500).json({ error: 'Error uploading and saving the file' });
   }
};

exports.displayData = async (req, res) => {
  
    try {

        const data = await DataModel.find({});

        if(!data){
            return res.status(404).send("No data found");
        }
        res.status(200).json(data);
        
    } catch (error) {
        
        return res.status(500).send("Internal server error");
    }
};




 