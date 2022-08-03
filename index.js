const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/home.html');
});

app.get('/privacy', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/privacy.html');
});

// app.get('/terms', (req, res) => {
//     res.sendFile(__dirname + '/pages' + '/terms.html');
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});