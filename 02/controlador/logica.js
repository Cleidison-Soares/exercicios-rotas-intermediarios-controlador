const jogadores = require('../src/bancodedados');

let contador = 0;
const array = (req, res) => {

    if(contador < jogadores.length){

        res.send(jogadores[contador]);
        contador++;

        if(contador == jogadores.length) {
            contador = 0;
        };

    };

};

const remover = (req, res) => {
    const {indice} = req.query;

    if (indice) {

        if (indice > jogadores.length || indice < 0) {
           return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);

        }

        jogadores.splice(indice,1);

    };

    res.send(jogadores);
    
};

const adicionar = (req, res) => {
    const {nome, indice} = req.query;

    let nomeFormatado = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    if (nome) {

        if(indice){

            if(indice >= 0 && indice < jogadores.length) {

                jogadores.splice(indice, 0, nomeFormatado);
            }else{

            return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
            };
        };

        jogadores.push(nomeFormatado);
    };

    res.send(jogadores);

};


module.exports = {
    array,
    remover,
    adicionar
};