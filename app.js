const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const views = path.join(__dirname, 'views');
const css = path.join(__dirname, 'css');

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}.`));

app.get('/', (req, res) => res.sendFile(path.join(views, 'index.html')));
app.get('/home', (req, res) => res.sendFile(path.join(views, 'index.html')));
app.get('/gallardo', (req, res) => res.sendFile(path.join(views, 'gallardo.html')));
app.get('/martinez', (req, res) => res.sendFile(path.join(views, 'martinez.html')));
app.get('/pratto', (req, res) => res.sendFile(path.join(views, 'pratto.html')));
app.get('/quintero', (req, res) => res.sendFile(path.join(views, 'quintero.html')));

app.use(express.static('public'));