const express = require('express');
const Model = require('../models/models');
const router  = express.Router();

router.get('/getAll', async (req, res) => {
   try {
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})

//Get by ID APIs
router.get('/getOne/:id', async(req, res) => {
    try {
        const data = await Model.findByID(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})
//Post
router.post('/post', async(req, res) => {
   const data = new Model ({
    Username: req.body.Username,
    Designation: req.body.Designation,
    Company: req.body.Company,
    Age: req.body.Age
   })
   
   try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
   }
   catch(error) {
    res.status(400).json({message: error.message})
   }

})

//Update 
router.patch('/patch/:id', async (req, res) => {
try {
    const id = req.params.id;
    const dataToUpdate = req.body;
    const options = {
        new:true;
    }
    const result = await Model.findByIdAndUpdate(
        id, dataToUpdate, options
    )
    res.send(result);
}
catch(error) {
    res.status(400).json({message: error.message})
}
})

//Delete  
router.delete('/delete/:id', async (req, res) => {
   try {
   await Model.findByIdAndDelete(req.params.id)
    res.send(`${req.params.id} Deleted`)
   }
   catch(error) {
    res.status(400).json({message: error.message})
   }
})
module.exports = router;