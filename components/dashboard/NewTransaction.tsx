"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { TransactionForm } from "@/lib/types/Transaction";
import hasEmptyValues from "@/lib/hasEmptyValues";

export default function NewTransaction() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const dateInputRef = useRef<HTMLInputElement>(null);

  const initialFormState: TransactionForm = {
    transaction_amount: "",
    transaction_label: "",
    transaction_date: "",
    transaction_type: "credit",
    transaction_account: "",
  };
  const [formData, setFormData] = useState<TransactionForm>(initialFormState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: string | undefined) => {
    if (date) {
      setFormData((prev) => ({
        ...prev,
        ["transaction_date"]: date,
      }));
    }
  };
  const handleCustomInputChange = (name: string, value: string) => {
    if (value.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    const submitRes = new Promise((resolve, reject) => {
      if (!hasEmptyValues(formData)) {
        setTimeout(() => {
          resolve("res");
          setFormData(initialFormState);
          setDate(undefined);
        }, 5000);
      } else {
        reject("Please provide value to every input.");
      }
    });

    toast.promise(submitRes, {
      loading: "Loading...",
      success: (data) => {
        return `${date} Done!`;
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
          <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6">
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Add Transaction</FieldLegend>
                <FieldDescription>
                  All transactions are recorded here
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="transaction_amount">
                      Transaction Amount
                    </FieldLabel>
                    <Input
                      id="transaction_amount"
                      placeholder="100.00"
                      name="transaction_amount"
                      type="number"
                      value={formData.transaction_amount}
                      required
                      onChange={handleChange}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="transaction_label">
                      Transaction Label
                    </FieldLabel>
                    <Input
                      id="transaction_label"
                      placeholder="ex: Rent"
                      name="transaction_label"
                      value={formData.transaction_label}
                      required
                      onChange={handleChange}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="date">Transaction Date</FieldLabel>
                    <div className="flex flex-col gap-3">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            id="date"
                            className="w-48 justify-between font-normal"
                          >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                              setDate(date);
                              setOpen(false);
                              handleDateChange(
                                date?.toLocaleDateString("en-GB")
                              );
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="transaction_type">
                      Type of Transaction
                    </FieldLabel>
                    <RadioGroup
                      defaultValue="credit"
                      name="transaction_type"
                      value={formData.transaction_type}
                      onValueChange={(e) => {
                        handleCustomInputChange("transaction_type", e);
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit" id="transaction_type" />
                        <Label htmlFor="credit">Credit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="debit" id="transaction_type" />
                        <Label htmlFor="debit">Debit</Label>
                      </div>
                    </RadioGroup>
                  </Field>
                  <Field>
                    <Select
                      name="transaction_account"
                      value={formData.transaction_account}
                      onValueChange={(e) => {
                        handleCustomInputChange("transaction_account", e);
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bpi">BPI</SelectItem>
                        <SelectItem value="bdo">BDO</SelectItem>
                        <SelectItem value="rcbc">RCBC</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </div>
        </div>
      </div>
    </>
  );
}
