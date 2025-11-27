export async function fetchRecentExpenses() {
    const recentExpenses = await fetch('http://localhost:8080/expenses/recent');
    return recentExpenses.json();
}