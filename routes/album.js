var express = require('express');
var router = express.Router();
const {data} = require('../data/albumData.json');
const {Albums} = data;


router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    const { title } = Albums[id];
    const { year } = Albums[id];
    const { songs } = Albums[id];
    const { image } = Albums[id];
    console.log(songs);
    res.render('album', { title, year, songs, image});
});
/* GET home page. */
router.get('/', function(req, res, next) {
    const id = Math.floor((Math.random() * Albums.length));
    res.redirect(`/album/${id}`);
});

module.exports = router;
