const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Users = require('/home/user-24-c1/API Twitter/Routes/UsersRoute.js')

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Bienvenue sur notre API twitter!!');
});

app.use('/Users', Users);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});