let income = 0; 
let monthlybudget = "£" + 5000; 
let expenses = []; 

function setIncome() {
    income = parseFloat(document.getElementById ("income").value); 
    updateSummary(); 
}; 

function addExpense() {
    const name = document.getElementById ("expenseName").value; 
    const amount = parseFloat(document.getelementById ("expenseAmount").value); 
   
    if (name && !isNaN(amount)) {
        expenses.push({name, amount });
        updateSummary();
        updateExpensesList(); 
    }
}; 

function updateSummary() {
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0); 
    const remaining = income - totalExpenses; 

      document.getElementById("totalIncome").textContent = income.toFixed(2);
      document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);
      document.getElementById("remainingBudget").textContent = remaining.toFixed(2);

}; 

function updateExpensesList() {
   const List = document.createElementgetElementById("expensesList"); 
   list.innerHTML = " "; 

   expenses.forEach(exp => {
    const List = document.createElement("Li"); 
    Li.textContent = `${exp.name}: $${exp.amount.toFixed(2)}`;
    list.appendChild(li);

   }); 

}; 
console.log(expenses); 