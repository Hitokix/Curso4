/*
var cardsImage = document.querySelectorAll('.cardImage');

cardsImage.forEach(function(card, index) {
    var i = index + 1;
    var context = { title: 'Tarjeta de Prueba', content: 'Weee Por fin lo hice yo solo', image: 'images/image_' + i + '.jpg', action: 'Llevame alla' };
    var html = ExpApp.test(context);
    card.innerHTML = html;
}, this);
*/
Handlebars.registerHelper('switch', function(value, option) {
    this._switch_value_ = value;
    var html = option.fn(this);
    delete this._switch_value_;
    return html;
});

Handlebars.registerHelper('case', function(value, option) {
    if (value == this._switch_value_) {
        return option.fn(this);
    }
});

/*
var mainblock = document.querySelectorAll('.block');
var mainblocksName = [
    { blockName: 'Usuario', blockHeight: '100px;' },
    { blockName: 'Pie de Pagina', blockHeight: '70px;' }
]

mainblock.forEach(function(mainBlocks, index) {
    var mainContext = mainblocksName[index];
    mainBlocks.innerHTML = ExpApp.blocks(mainContext);
}, this);
*/

changePageState('newExpense');

// Initialize collapse button
$('.button-collapse').sideNav();