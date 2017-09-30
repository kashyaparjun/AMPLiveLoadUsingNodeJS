var express = require('express');
var router = express.Router();
const moment = require('moment');

videos = [];


router.get('/', function(req, res, next) {
  res.render('index',
    {
      user: "To AMP Live List",
      title:"AMP Live List",
      videos: videos
    });
});

router.post('/', function(req, res, next) {
  console.log(req.body.videoID);
  var t = {
    id: videos.length + 1,
    YoutubeID: req.body.YoutubeID,
    timestamp: moment().unix(),
    timestampStr: moment().format()
  }
  videos.push(t);
  res.status(200).json({"res": t});
});

module.exports = router;
