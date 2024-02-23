const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Tweets = require('/home/user-24-c1/API Twitter/Routes/tweetsRoute.js')
const RouterAuth= require('./Routes/AuthenficationRoute');
const RouterLogin= require('./Routes/loginAuthRoute')


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/Tweets', Tweets);
app.use('/auth', RouterAuth)
app.use('/auth', RouterLogin)


app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});