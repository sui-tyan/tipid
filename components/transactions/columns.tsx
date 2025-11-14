"use client";

import { TransactionData } from "@/lib/types/Transaction";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<TransactionData>[] = [
  {
    accessorKey: "transaction_amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("transaction_amount"));
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(amount);
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "transaction_label",
    header: "Label",
  },
  {
    accessorKey: "transaction_date",
    header: "Date",
  },
  {
    accessorKey: "transaction_type",
    header: "Type",
  },
  {
    accessorKey: "transaction_account",
    header: "Account",
  },
];
