// this is my typescript code
var expenseForm = document.getElementById('expense-form');
var expenseList = document.getElementById('expense-list');
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var date = document.getElementById('date').value;
    var category = document.getElementById('category').value;
    var amount = document.getElementById('amount').value;
    var expense = {
        date: date,
        category: category,
        amount: amount
    };
    addExpense(expense);
});
function addExpense(expense) {
    var expenseItem = document.createElement('li');
    expenseItem.textContent = "".concat(expense.date, " - ").concat(expense.category, " - ").concat(expense.amount);
    expenseList.appendChild(expenseItem);
}
