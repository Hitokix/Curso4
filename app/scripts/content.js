var blocksName = {
    'newExpense': [
        { blockName: 'Registrar Nuevos Gastos', blockHeight: '150px;' },
        { blockName: 'Lista de Movimimentos', blockHeight: '400px;' },
    ],
    'expenseMove': [
        { blockName: 'Filtros', blockHeight: '150px;' },
        { blockName: 'Contenido', blockHeight: '400px;' },
    ],
    'expenseForcast': [
        { blockName: 'Filtros', blockHeight: '150px;' },
        { blockName: 'Graficos', blockHeight: '400px;' },
    ]
};

var upContent = document.querySelector('#upContent');

function getStateTitle(state) {
    for (var i = 0; i <= menuItems.length; i++) {
        if (menuItems[i].state === state) {
            return menuItems[i].Item;
        }
    }
}

function changePageState(state) {
    var upContext = { 'state': state, 'title': getStateTitle(state) };
    upContent.innerHTML = ExpApp.content(upContext);

    var block = document.querySelectorAll('#' + state + ' .block');
    block.forEach(function(blocks, index) {
        blocks.innerHTML = ExpApp.blocks(blocksName[state][index]);
    }, this);

    $('.menuLink').removeClass('menuActive');
    $('#' + state + 'Link').addClass('menuActive');
};