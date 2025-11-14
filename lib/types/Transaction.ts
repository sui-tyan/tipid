export type TransactionForm = {
    transaction_amount: number | string,
    transaction_label: string,
    transaction_date: string,
    transaction_type: "credit" | "debit";
    transaction_account: string
}

export type TransactionData = {
    transaction_id: string,
    transaction_amount: number | string,
    transaction_label: string,
    transaction_date: string,
    transaction_type: "credit" | "debit";
    transaction_account: string
}