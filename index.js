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

app.get('/auth/discord', (req, res) => {
    res.status(200).status(200).redirect('/banappeal')
});

app.get('/discord/login', (req, res) => {
    res.status(200).redirect('https://discord.com/api/oauth2/authorize?client_id=815153881217892372&redirect_uri=https%3A%2F%2Fundertalerpg.monster%2Fauth%2Fdiscord&response_type=token&scope=identify');
});

app.get('/invite', (req, res) => {
    res.status(200).redirect('https://discord.com/api/oauth2/authorize?client_id=748868577150369852&permissions=415001603136&scope=bot%20applications.commands');
});

app.get('/banappeal', (req, res) => {
    res.status(200).sendFile(__dirname + '/pages' + '/banappeal.html');
});

app.get('/banappeal2', (req, res) => {
    res.status(200).sendFile(__dirname + '/pages' + '/banappealOLD.html')
})

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