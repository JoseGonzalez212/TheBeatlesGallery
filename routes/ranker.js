var express = require('express');
var router = express.Router();
const {data} = require('../data/albumData.json');
const {Albums} = data;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ranker', {Albums});
});

module.exports = router;
