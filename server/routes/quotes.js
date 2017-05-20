const express = require('express');
const router = express.Router();
const Quote = require('../../models/quote.js')

router.get('/', function(req, res, next){
  Quote.find(function(err, quotes){
    if (err) {
      return res.status(500).json({title:'Error', error: err});
    }
    res.status(200).json({message: "Success", obj: quotes})
  });
});

module.exports = router;
