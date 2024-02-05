const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Bienvenue sur notre API twitter!!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});