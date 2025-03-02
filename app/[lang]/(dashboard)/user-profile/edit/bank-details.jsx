"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const BankDetails = () => {
  const [paymentType, setPaymentType] = useState(""); // State to track selected payment type
  const paymentOptions = [
    { value: "cash", label: "Cash" },
    { value: "bkash", label: "Bkash" },
    { value: "nagad", label: "Nagad" },
    { value: "rocket", label: "Rocket" },
    { value: "bank", label: "Bank" },
  ];

  return (
    <Card className="rounded-t-none pt-6">
      <CardContent>
        <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
          {/* Payment Type Dropdown */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="paymentType" className="mb-2">
              Payment Type
            </Label>
            <Select
              onValueChange={(value) => setPaymentType(value)}
              value={paymentType || undefined} // Ensure it resets properly
            >
              <SelectTrigger>
                <SelectValue>
                  {paymentType || "Select a payment type ..."}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {paymentOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Conditional Input Fields Based on Payment Type */}
          {paymentType === "bkash" && (
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="bkashNumber" className="mb-2">
                Bkash Number
              </Label>
              <Input id="bkashNumber" placeholder="Enter Bkash number" />
            </div>
          )}
          {paymentType === "nagad" && (
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="nagadNumber" className="mb-2">
                Nagad Number
              </Label>
              <Input id="nagadNumber" placeholder="Enter Nagad number" />
            </div>
          )}
          {paymentType === "rocket" && (
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="rocketNumber" className="mb-2">
                Rocket Number
              </Label>
              <Input id="rocketNumber" placeholder="Enter Rocket number" />
            </div>
          )}
          {paymentType === "bank" && (
            <>
              <div className="col-span-12 md:col-span-6">
                <Label htmlFor="store">Select Bank</Label>
                <div>
                  <Select id="store">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alberta">Alberta</SelectItem>
                      <SelectItem value="british">British Columbia</SelectItem>
                      <SelectItem value="manitoba">Manitoba</SelectItem>
                      <SelectItem value="brunswick">New Brunswick</SelectItem>
                      <SelectItem value="ontario">Ontario</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <Label htmlFor="accountNumber" className="mb-2">
                  Bank Branch Name
                </Label>
                <Input id="accountNumber" placeholder="Enter account number" />
              </div>
              <div className="col-span-12 md:col-span-6">
                <Label htmlFor="branchName" className="mb-2">
                  Bank Route Name
                </Label>
                <Input id="branchName" placeholder="Enter branch name" />
              </div>
              <div className="col-span-12 md:col-span-6">
                <Label htmlFor="branchName" className="mb-2">
                  Bank A/C Owner Name
                </Label>
                <Input id="branchName" placeholder="Enter branch name" />
              </div>
              <div className="col-span-12 md:col-span-6">
                <Label htmlFor="branchName" className="mb-2">
                  Bank A/C Number
                </Label>
                <Input id="branchName" placeholder="Enter branch name" />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button color="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankDetails;
