let listaProdutos = [
    produto = {
        nomeProduto: 'Pão Francês',
        imgProduto: 'img/pão-frances.jpg',
        descProduto: 'Veio da françã',
        precoProduto: 'R$ 8,99 Kg'
    },

    produto = {
        nomeProduto: 'Pão de Queijo',
        imgProduto: 'img/pao-queijo.jpg',
        descProduto: 'Veio do queijo',
        precoProduto: 'R$ 10,99 Kg'
    },

    produto = {
        nomeProduto: 'Pão Doce',
        imgProduto: 'img/pao-doce.jpg',
        descProduto: 'Veio da terra doce',
        precoProduto: 'R$ 25,50 Kg'
    },

    produto = {
        nomeProduto: 'Pão integral',
        imgProduto: 'img/pao-integral.jpg',
        descProduto: 'Veio do integrado',
        precoProduto: 'R$ 20.99 Kg'
    },
];

let tagImg = document.createElement('img');
tagImg.classList.add('img-produto');
tagImg.setAttribute('src', listaProdutos[0].imgProduto);
tagImg.setAttribute('alt', listaProdutos[0].nomeProduto);

let divcol = document.createElement('div');
divcol.classList.add('col-3');

divcol.appendChild(tagImg);


let divProdutos = document.getElementById('produtos');

console.log(divProdutos);