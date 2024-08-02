const {Carrinho} = require('./carrinho')
const {Item} = require('./item')


const carrinho = new Carrinho()
carrinho.adiciona(new Item('Maçã',1,3))
carrinho.adiciona(new Item('Banana',1.4,5))
carrinho.adiciona(new Item('Melancia',2,1))
carrinho.adiciona(new Item('Uva',4.3,2))
carrinho.adiciona(new Item('Açai',3,5))

carrinho.adicionaFrete(15)
carrinho.calculaTotal()
carrinho.finalizaCompra()
console.log(carrinho)