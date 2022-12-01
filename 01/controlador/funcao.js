const somar = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;

    if (num1 && num2) {

       resultado = Number(num1) + Number(num2);
    
    }
    
    res.json(resultado);

};


const subtrair = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;

    if (num1 && num2) {

        resultado = Number(num1) - Number(num2);
        
    }

    res.json(resultado);

};

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;

    if (num1 && num2) {

        resultado = Number(num1) * Number(num2);
     
    }

    res.json(resultado);

};

const dividir = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;

    if (num1 && num2) {

        resultado = Number(num1) / Number(num2);
        resultado.toFixed(3);
    
    }

    res.json(resultado);

};


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}