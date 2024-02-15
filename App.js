const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Tweets = require('/home/user-24-c1/API Twitter/Routes/tweetsRoute.js')
const Auth= require('/home/user-24-c1/API Twitter/Routes/AuthenficationRoute.js');



app.use(express.json())

app.use('/Tweets', Tweets);
app.use('/ Users',Auth)

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});