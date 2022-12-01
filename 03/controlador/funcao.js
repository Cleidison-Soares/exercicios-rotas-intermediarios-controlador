const imoveis = require('../src/bancodedados.js');

const todosImoveis = (req, res) => {
    
    res.send(imoveis);

};


const filtro = (req, res) => {
    const { id } = req.params;

    const encontrado = imoveis.find((item) => {
        return item.id == id;
    });

    res.send(encontrado);
}



module.exports = {
    todosImoveis,
    filtro
}