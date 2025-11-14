"use client";

import { AddAccountForm } from "@/lib/types/Account";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChangeEvent, useState } from "react";
import hasEmptyValues from "@/lib/hasEmptyValues";
import { toast } from "sonner";

export default function Accounts() {
  const initialAccountFormState: AddAccountForm = {
    account_name: "",
    account_number: "",
    initial_balance: "",
  };

  const [accountForm, setAccountForm] = useState<AddAccountForm>(
    initialAccountFormState
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAccountFormSubmit = () => {
    const submitRes = new Promise((resolve, reject) => {
      if (!hasEmptyValues(accountForm)) {
        setTimeout(() => {
          resolve("res");
          setAccountForm(initialAccountFormState);
        }, 5000);
      } else {
        reject("Please provide value to every input.");
      }
    });
    toast.promise(submitRes, {
      loading: "Adding account. Please wait...",
      success: (data) => {
        return `${data} Done!`;
      },
      error: (data) => {
        return `${data}`;
      },
    });
  };

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
                <Card className="flex flex-col gap-3">
                  <CardHeader className="items-center pb-0">
                    <CardTitle>Bank of the Philippine Islands</CardTitle>
                    <CardDescription>
                      Account Number: 8919097575
                    </CardDescription>
                    <CardAction>
                      <Button
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        Edit
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between">
                      <p className="font-semibold">Balance</p>
                      <p>PHP 19,650.6</p>
                    </div>
                  </CardContent>
                </Card>
                <Dialog>
                  <Card className="flex flex-col gap-3 justify-center items-center">
                    <CardContent>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="cursor-pointer">
                          Add Account
                        </Button>
                      </DialogTrigger>
                    </CardContent>
                  </Card>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add Account</DialogTitle>
                      <DialogDescription>
                        Add an addional account to track
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="account_name">Account Name</Label>
                        <Input
                          id="account_name"
                          name="account_name"
                          value={accountForm.account_name}
                          placeholder="Sample Bank"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="account_number">Account Number</Label>
                        <Input
                          id="account_number"
                          name="account_number"
                          value={accountForm.account_number}
                          placeholder="1234567890"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="initial_balance">Initial Balance</Label>
                        <Input
                          type="number"
                          id="initial_balance"
                          name="initial_balance"
                          value={accountForm.initial_balance}
                          placeholder="0.0"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" onClick={handleAccountFormSubmit}>
                        Add Account
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
