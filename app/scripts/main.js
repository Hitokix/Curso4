/*
var cardsImage = document.querySelectorAll('.cardImage');

cardsImage.forEach(function(card, index) {
    var i = index + 1;
    var context = { title: 'Tarjeta de Prueba', content: 'Weee Por fin lo hice yo solo', image: 'images/image_' + i + '.jpg', action: 'Llevame alla' };
    var html = ExpApp.test(context);
    card.innerHTML = html;
}, this);
*/
var menu = document.querySelector('#menu');
menu.innerHTML = ExpApp.menu();

var block = document.querySelectorAll('.block');
var blocksName = [
    { blockName: 'Usuario', blockHeight: '100px;' },
    { blockName: 'Registrar Nuevos Gastos', blockHeight: '150px;' },
    { blockName: 'Lista de Movimimentos', blockHeight: '400px;' },
    { blockName: 'Pie de Pagina', blockHeight: '70px;' }
]

block.forEach(function(blocks, index) {
    var context = blocksName[index];
    blocks.innerHTML = ExpApp.blocks(context);
}, this);