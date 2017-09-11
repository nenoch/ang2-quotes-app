const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../../models/user.js');

router.post('/', function(req, res, next){
  var user = new User({
    nickname: req.body.nickname,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  user.save(function(err,result){
    if (err) {
      return res.status(500).json({
        title: 'Error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

module.exports = router;
