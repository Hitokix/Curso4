var menu = document.querySelector('#menu');
var menuItems = [
    { 'Item': 'Registro de Nuevo Gasto', 'state': 'newExpense', 'active': true },
    { 'Item': 'Movimiento de Gastos', 'state': 'expenseMove', 'active': false },
    { 'Item': 'Pronostico', 'state': 'expenseForcast', 'active': false },
    { 'Item': 'Regresar a Menu Anterior', 'active': false }
];
var menuContext = { menuItems };
menu.innerHTML = ExpApp.menu(menuContext);
]