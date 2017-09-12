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
    };

}

function levelChangeTable() {
    var tableLevelInfo;
    var tableLvl;
    var level = document.getElementById('selLevel').value;

    if (level === '1') {
        tableLevelInfo = document.querySelector('#tableLevel');
        tableLvl = [
            { 'Tipo': 'Administracion', 'Monto': 'USD 600.00', 'Budget': '1000.00', 'Diff': '400.00' },
            { 'Tipo': 'Legales', 'Monto': 'USD 1800.00', 'Budget': '2000.00', 'Diff': '200.00' },
            { 'Tipo': 'Operativos', 'Monto': 'USD 6000.00', 'Budget': '6000.00', 'Diff': '0.00' },
            { 'Tipo': 'Otros', 'Monto': 'USD 500.00', 'Budget': '400.00', 'Diff': '-100.00' }
        ];
        tableLevelInfo.innerHTML = ExpApp.tableLevel_1({ account: tableLvl });
    } else if (level === '2') {
        tableLevelInfo = document.querySelector('#tableLevel');
        tableLvl = [
            { 'Cuenta': '610112', 'Monto': 'USD 25.00', 'Fecha': '25-08-2017', 'Concepto': 'Gasto de Combustible' },
            { 'Cuenta': '610115', 'Monto': 'USD 65.00', 'Fecha': '22-08-2017', 'Concepto': 'Internet' },
            { 'Cuenta': '610111', 'Monto': 'USD 350.00', 'Fecha': '14-08-2017', 'Concepto': 'Mantenimiento de Vehiculos' },
            { 'Cuenta': '610111', 'Monto': 'USD 1400.00', 'Fecha': '11-08-2017', 'Concepto': 'Mantenimiento de local' },
            { 'Cuenta': '620001', 'Monto': 'USD 650.00', 'Fecha': '01-08-2017', 'Concepto': 'Vaijes Accionistas' }
        ];

        tableLevelInfo.innerHTML = ExpApp.tableBase({ account: tableLvl });
    }
};

function changePageState(state) {

    var upContext = { 'state': state, 'title': getStateTitle(state) };
    upContent.innerHTML = ExpApp.content(upContext);

    var statePage = document.querySelector('#' + state);
    statePage.innerHTML = ExpApp[state]();

    $('.menuLink').removeClass('menuActive');
    $('#' + state + 'Link').addClass('menuActive');

    if (state === 'newExpense') {

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

        var tableAccount = document.querySelector('#tableAccount');
        var tableAcct = [
            { 'Cuenta': '610112', 'Monto': 'USD 25.00', 'Fecha': '25-08-2017', 'Concepto': 'Gasto de Combustible' },
            { 'Cuenta': '610115', 'Monto': 'USD 65.00', 'Fecha': '22-08-2017', 'Concepto': 'Internet' },
            { 'Cuenta': '610111', 'Monto': 'USD 350.00', 'Fecha': '14-08-2017', 'Concepto': 'Mantenimiento de Vehiculos' },
            { 'Cuenta': '610111', 'Monto': 'USD 1400.00', 'Fecha': '11-08-2017', 'Concepto': 'Mantenimiento de local' },
            { 'Cuenta': '620001', 'Monto': 'USD 650.00', 'Fecha': '01-08-2017', 'Concepto': 'Vaijes Accionistas' }
        ];

        tableAccount.innerHTML = ExpApp.tableBase({ account: tableAcct });
    } else if (state === 'expenseMove') {
        $(document).ready(function() {
            $('select').material_select();
        });

    } else if (state === 'expenseForcast') {
        $(document).ready(function() {
            $('select').material_select();
        });

        var sliderMonth = document.getElementById('sliderMonth');
        noUiSlider.create(sliderMonth, {
            start: [1, 3],
            connect: true,
            tooltips: true,
            step: 3,
            format: wNumb({
                decimals: 0,
            }),
            range: { 'min': [1], 'max': [12] }

        });

        var inputFormatMin = document.getElementById('sliderMonthMin');
        var inputFormatMax = document.getElementById('sliderMonthMax');

        sliderMonth.noUiSlider.on('update', function(values, handle) {
            inputFormatMin.value = values[0];
            inputFormatMax.value = values[1];
        });

        var tableForeCast = document.querySelector('#tableForeCast');
        var tableFor = [
            { 'Tipo': 'Administracion', 'Monto': 'USD 600.00', 'Budget': '1000.00', 'ForeCast': '500.00' },
            { 'Tipo': 'Legales', 'Monto': 'USD 1800.00', 'Budget': '2000.00', 'ForeCast': '300.00' },
            { 'Tipo': 'Operativos', 'Monto': 'USD 6000.00', 'Budget': '6000.00', 'ForeCast': '20.00' },
            { 'Tipo': 'Otros', 'Monto': 'USD 500.00', 'Budget': '400.00', 'ForeCast': '600.00' }
        ];
        tableForeCast.innerHTML = ExpApp.tableForeCast({ account: tableFor });
    };
};