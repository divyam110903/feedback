var express = require('express');
var router = express.Router();
const Feedback = require('../models/feedback');

router.post('/',async function(req,res){
    try{
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({message: 'Feedback submitted successfully'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
    });


router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { categories: category } : {};
    const feedbacks = await Feedback.find(filter);
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
});
module.exports = router;


