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

// router.use('/', function(req,res,next){
//   jwt.verify(req.query.token, 'secret', function(err, decoded){
//     if (err) {
//       res.status(401).json({
//         title: "Not authenticated user",
//         error: err
//       });
//     }
//     next();
//   })
// });

router.post('/', function(req, res, next){
  var quote = new Quote({
    content: req.body.content,
    author: req.body.author
  });
  quote.save(function(err,result){
    if (err) {
      return res.status(500).json({
        title: 'Error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved quote',
      obj: result
    });
  });
});

router.delete('/:id', function(req,res,next){
  Quote.findById(req.params.id, function(err, quote){
    if (err) {
      return res.status(500).json({
        title:'Error occured',
        error: err
      });
    }
    if (!quote) {
      return res.status(500).json({
        title: 'Cannot find quote.',
        error: {message:'Quote not found'}
      });
    }
    quote.remove(function(err, result){
      if (err) {
        return res.status(500).json({
          title:'Error occured',
          error: err
        });
      }
      res.status(201).json({
        message: 'Deleted quote',
        obj: result
      });
    });
  });
});

module.exports = router;
