export type Expense = {
    expenseLabel: string;
    expenseValue: number;
}

export type ExpenseChartData = Expense & {
    fill: string
}