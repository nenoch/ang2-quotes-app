const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Quote = require('../../models/quote.js')

router.get('/', function(req, res, next){
  Quote.find(function(err, quotes){
    if (err) {
      return res.status(500).json({title:'Error', error: err});
    }
    res.status(200).json({message: "Success", obj: quotes})
  });
});

// if the use has not a valid token cannot access the following routes
router.use('/', function(req,res,next){
  jwt.verify(req.query.token, 'secret', function(err, decoded){
    if (err) {
      res.status(401).json({
        title: "Not authenticated user",
        error: err
      });
    }
    next();
  })
});

module.exports = router;
