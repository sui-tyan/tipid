import { TransactionData } from "@/lib/types/Transaction";
import { columns } from "@/components/transactions/columns";
import { DataTable } from "../transactions/data-table";

export const transactions: TransactionData[] = [
  {
    transaction_id: "1dwasdxc12d",
    transaction_amount: 100.0,
    transaction_label: "Rent",
    transaction_date: "2025/09/28",
    transaction_type: "credit",
    transaction_account: "BPI",
  },
  {
    transaction_id: "2xkz98aj34b",
    transaction_amount: 59.99,
    transaction_label: "Groceries",
    transaction_date: "2025/10/01",
    transaction_type: "debit",
    transaction_account: "BPI",
  },
  {
    transaction_id: "3lpwoei83lk",
    transaction_amount: 250.0,
    transaction_label: "Freelance Payment",
    transaction_date: "2025/10/03",
    transaction_type: "credit",
    transaction_account: "UnionBank",
  },
  {
    transaction_id: "4zmnv743kqd",
    transaction_amount: 35.5,
    transaction_label: "Internet Bill",
    transaction_date: "2025/10/05",
    transaction_type: "debit",
    transaction_account: "BPI",
  },
  {
    transaction_id: "5qwerty9023",
    transaction_amount: 1200.0,
    transaction_label: "Salary",
    transaction_date: "2025/09/30",
    transaction_type: "credit",
    transaction_account: "BPI",
  },
  {
    transaction_id: "6abcde12345",
    transaction_amount: 80.0,
    transaction_label: "Electricity Bill",
    transaction_date: "2025/10/07",
    transaction_type: "debit",
    transaction_account: "UnionBank",
  },
];

async function getData(): Promise<TransactionData[]> {
  return transactions;
}

export default async function Transactions() {
  const data = await getData();
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
