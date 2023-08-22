/*

    DESAFIO
    Calcula Desconto:
    Todos os Produtos acima de R$ 30,00 tem desconto de 10%

    PASSO A PASSO PARA RESOLVER ESSE DESAFIO:

    1) SOMAR TODOS OS PRODUTOS
    2) VERIFICAR QUANDO O PRODUTO FOR MAIOR QUE R$ 30 
    3) DAR DESCONTO DE 10%

*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let valorInicial = 0

cart.forEach(values => {
    valorInicial = valorInicial + values

    if(values > 30){
        calculateDiscount(values, 10)
    } else {
        valorInicial = valorInicial + values
    }

});

function calculateDiscount(price, discount){
    let desconto = (price * discount) / 100
    return desconto
}

