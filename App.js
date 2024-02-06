const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Users = require('.routes/UsersRoute.js')

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Bienvenue sur notre API twitter!!');
});

app.use('/Users', Users);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});