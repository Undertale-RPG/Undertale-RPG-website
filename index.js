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

app.get('/terms', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/terms.html');
});

app.get('/banappeal', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/banappeal.html');
});

app.get('/faq', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/faq.html');
});

app.get('/commands', (req, res) => {
    res.sendFile(__dirname + '/pages' + '/commands.html');
});


const fs = require('fs');
const dir = './api';
const files = fs. readdirSync(dir).filter(file => file.endsWith('.json'));


for (const file of files) {
    const defFile = file.replace('.json', '');
    app.get('/api/'+defFile, (req, res) => {
        res.status(200).sendFile(__dirname + '/api/' + defFile + '.json');
    })
}

// make a auto redirect to a 404 page
app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/pages' + '/404.html');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});