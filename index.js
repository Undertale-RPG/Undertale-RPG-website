const express = require('express');
const app = express();
const port = 22398;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/home.html');
});

app.get('/privacy', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/privacy.html');
});

app.get('/banappeal', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/banappeal.html');
});

// app.get('/terms', (req, res) => {
//     res.sendFile(__dirname + '/pages' + '/terms.html');
// });


app.get('/api/monsters', (req, res) => {
    res.sendFile(__dirname + '/api' + '/monsters.json');
});

// make a auto redirect to a 404 page
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/404.html');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});