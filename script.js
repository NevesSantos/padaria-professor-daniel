let listaProdutos = [
    produto = {
        imgsProduto: 'imgs/pao-frances.jpg',
        nomeProduto: 'Pão Francês',
        descProduto: 'Veio da frança',
        precoProduto: 'R$ 7,99'
    },
    produto = {
        imgsProduto: 'imgs/pao-queijo.jpg',
        nomeProduto: 'Pâo de queijo',
        descProduto: 'De queijo mesmo em ksksks',
        precoProduto: 'R$ 10,00'
    },
];
let divRow = document.createElement('div');
if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length; i++) {

        let imgs = document.createElement('img');
        imgs.classList.add('img-produto');
        imgs.setAttribute('src', listaProdutos[i].imgsProduto);
        imgs.setAttribute('alt', listaProdutos[i].nomeProduto);

        let divNomeProduto = document.createElement('div');
        divNomeProduto.classList.add('nome-produto');
        divNomeProduto.innerText = listaProdutos[i].nomeProduto;

        let divDesc = document.createElement('div');
        divDesc.classList.add('descricao');
        divDesc.innerText = listaProdutos[i].descProduto;

        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = listaProdutos[i].precoProduto;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = "Comprar >>>";

        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(imgs);
        divCol.appendChild(divNomeProduto);
        divCol.appendChild(divDesc);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);


        divRow.classList.add('row');
        divRow.appendChild(divCol);

    }
} else {
    divRow.innerText = "Nenhum elemento encontrado";
}

let divProdutos = document.getElementById('produtos');
divProdutos.appendChild(divRow);
