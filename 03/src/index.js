const express = require('express');
const app = express();

const { todosImoveis, filtro } = require('../controlador/funcao');


app.get('/imoveis', todosImoveis);
app.get('/imoveis/:id', filtro);

app.listen(8000);