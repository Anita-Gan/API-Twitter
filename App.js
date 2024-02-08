const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Users = require('/home/user-24-c1/API Twitter/Routes/UsersRoute.js')

app.use(express.json())

app.use('/Users', Users);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});