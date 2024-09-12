

// this is my typescript code



const expenseForm: HTMLFormElement = document.getElementById('expense-form') as HTMLFormElement;
const expenseList: HTMLUListElement = document.getElementById('expense-list') as HTMLUListElement;

expenseForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const date: string = (document.getElementById('date') as HTMLInputElement).value;
    const category: string = (document.getElementById('category') as HTMLInputElement).value;
    const amount: string = (document.getElementById('amount') as HTMLInputElement).value;

    const expense: { date: string, category: string, amount: string } = {
        date,
        category,
        amount
    };

    addExpense(expense);
});

function addExpense(expense: { date: string, category: string, amount: string }): void {
    const expenseItem: HTMLLIElement = document.createElement('li');
    expenseItem.textContent = `${expense.date} - ${expense.category} - ${expense.amount}`;
    expenseList.appendChild(expenseItem);
}
