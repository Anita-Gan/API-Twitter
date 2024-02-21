const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Tweets = require('/home/user-24-c1/API Twitter/Routes/tweetsRoute.js')
const RouterAuth= require('./Routes/AuthenficationRoute');



app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/Tweets', Tweets);
app.use('/auth', RouterAuth)

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});