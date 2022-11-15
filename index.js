const express = require('express');
const app = express();
const shah512 = require('js-sha512');
const port = 3000;
const json = require('./public.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/json', (req, res) => {
    res.json(json);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})