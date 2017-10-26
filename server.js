const express = require('express');
const path = require('path');
const app = express();
const playerController = ('./controllers/player');

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => res.sendFile('index.html'));

app.post('/ready', playerController.ready);
app.post('/search', playerController.search);

app.listen(process.env.PORT || 3000);
