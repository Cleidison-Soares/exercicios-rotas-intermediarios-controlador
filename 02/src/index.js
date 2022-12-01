const express = require('express');
const app = express();
const { array, remover, adicionar } = require('../controlador/logica');

app.get('/', array);
app.get('/remover', remover);
app.get('/adicionar', adicionar);

app.listen(8000);