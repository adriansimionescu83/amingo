// 1. Import all the necesary NPM modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const cors = require('cors');

 // 2. Import routes
 const UserRoutes = require('./routes/User.js');
 const FeedRoutes = require('./routes/Feed.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
const dbURL = "mongodb+srv://admin:P@ssw0rd@cluster0-usoyf.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(
    dbURL,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(
   ()=>{//Sorry, not this time
       console.log('db is connected')
   }).catch(
       ()=>{
        console.log('Try again, no response')
       }
)
// 5. Routes for our web app server
app.use(
    '/user', //http://www.myapp.com/user
    UserRoutes // routes/User.js
);

app.use(
    '/feed', //http://www.myapp.com/feed
    FeedRoutes // routes/Feed.js
);

app.get(
    '*',
    (req, res)=>{
        res.send("<h1 style='color:black'>404</h1>");
    }
);
app.listen(
    3010,
    ()=>{
        console.log('you are connected');
    }
)