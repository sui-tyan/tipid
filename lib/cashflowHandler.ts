export async function fetchRecentCashflow() {
    const recentCashflow = await fetch('http://localhost:8080/cashflow/recent');
    return recentCashflow.json();
}