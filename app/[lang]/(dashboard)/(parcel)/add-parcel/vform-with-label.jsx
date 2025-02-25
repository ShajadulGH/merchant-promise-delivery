"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const VFormWithLabel = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-2  ">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Merchant Information </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                  <Label htmlFor="store">Select Youre Store</Label>
                  <Select id="store">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Merchant for Test HUB" />
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
                <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
                  <Label htmlFor="state">Merchant Order ID</Label>
                  <Select id="state">
                    <SelectTrigger>
                      <SelectValue placeholder="Merchant Order ID" />
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
            </CardContent>
          </Card>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Customer Information </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="fullName5">Customer Name</Label>
                  <Input type="text" placeholder="Your Name" id="fullName5" />
                </div>
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="email5">Customer Contact Number</Label>
                  <Input type="email" placeholder="Your Email" id="email5" />
                </div>
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="email5">Customer Address</Label>
                  <Input type="email" placeholder="Your Email" id="email5" />
                </div>
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="store">Select Your District</Label>
                  <div>
                    <Select id="store">
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alberta">Alberta</SelectItem>
                        <SelectItem value="british">
                          British Columbia
                        </SelectItem>
                        <SelectItem value="manitoba">Manitoba</SelectItem>
                        <SelectItem value="brunswick">New Brunswick</SelectItem>
                        <SelectItem value="ontario">Ontario</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Select id="store">
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
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
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Parcel Information </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="col-span-1  flex flex-col gap-2 mb-4">
                <Label htmlFor="store">Servise Type</Label>
                <Select id="store">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
              <div className="col-span-1  flex flex-col gap-2 mb-4">
                <Label htmlFor="state">Item Type</Label>
                <Select id="state">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
              <div className="col-span-1  flex flex-col gap-2 mb-4">
                <Label htmlFor="state">Select Weight Package</Label>
                <Select id="state">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="fullName5">Total Collection Amount</Label>
                  <Input type="text" placeholder="Your Name" id="fullName5" />
                </div>
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="email5">Product Value</Label>
                  <Input type="email" placeholder="Your Email" id="email5" />
                </div>
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="email5">Product Details</Label>
                  <Input type="email" placeholder="Your Email" id="email5" />
                </div>
                <div className="col-span-1  flex flex-col gap-2">
                  <Label htmlFor="text">Remark</Label>
                  <Textarea placeholder="Type Here.." rows="3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Button type="submit">Add Parcel</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;
