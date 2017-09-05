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

$(document).ready(function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
});

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

    var statePage = document.querySelector('#' + state);
    statePage.innerHTML = ExpApp[state]();

    $('.menuLink').removeClass('menuActive');
    $('#' + state + 'Link').addClass('menuActive');
};