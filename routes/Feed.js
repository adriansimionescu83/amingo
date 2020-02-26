const express = require('express');
const router = express.Router();
const FeedModel = require('../models/Feed.js');

router.post(
    '/create',
    (req, res)=>{
        const formdata = {
            description: req.body.description,
            image: req.body.image,
            hashtags: req.body.hashtags,
        }

        const feedModel = new FeedModel(formdata);
        feedModel.save();
        res.send('Feed is created');
    }
);

router.get(
    '/all',// http://www.myapp.com/feed/create
    (req, res)=>{
        FeedModel
        .find()
        .then((results)=>{
            res.json(
                {
                    msg:'here are your feeds',
                    results: results
                }
            );
        })
    }
);



module.exports = router;