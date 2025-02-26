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
        {/* Merchant Information */}
        <div className="col-span-2">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Merchant Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                  <Label htmlFor="store">
                    Select Your Store <span className="text-red-500">*</span>
                  </Label>
                  <Select id="store">
                    <SelectTrigger className="p-5">
                      {" "}
                      {/* Consistent padding */}
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
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                  <Label htmlFor="fullName5">Merchant Order ID</Label>
                  <Input
                    type="text"
                    placeholder="Merchant Order ID"
                    id="fullName5"
                    className="p-5" // Consistent padding
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Information */}
        <div className="col-span-2">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="fullName5">
                        Customer Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        id="fullName5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Customer Contact Number{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Customer Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="store">
                        Select Your District{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select id="store">
                        <SelectTrigger className="p-5">
                          {" "}
                          {/* Consistent padding */}
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alberta">Alberta</SelectItem>
                          <SelectItem value="british">
                            British Columbia
                          </SelectItem>
                          <SelectItem value="manitoba">Manitoba</SelectItem>
                          <SelectItem value="brunswick">
                            New Brunswick
                          </SelectItem>
                          <SelectItem value="ontario">Ontario</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Parcel Information */}
        <div className="col-span-2">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Parcel Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="store">
                        Service Type <span className="text-red-500">*</span>
                      </Label>
                      <Select id="store">
                        <SelectTrigger className="p-5">
                          {" "}
                          {/* Consistent padding */}
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alberta">Alberta</SelectItem>
                          <SelectItem value="british">
                            British Columbia
                          </SelectItem>
                          <SelectItem value="manitoba">Manitoba</SelectItem>
                          <SelectItem value="brunswick">
                            New Brunswick
                          </SelectItem>
                          <SelectItem value="ontario">Ontario</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="state">
                        Item Type <span className="text-red-500">*</span>
                      </Label>
                      <Select id="state">
                        <SelectTrigger className="p-5">
                          {" "}
                          {/* Consistent padding */}
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alberta">Alberta</SelectItem>
                          <SelectItem value="british">
                            British Columbia
                          </SelectItem>
                          <SelectItem value="manitoba">Manitoba</SelectItem>
                          <SelectItem value="brunswick">
                            New Brunswick
                          </SelectItem>
                          <SelectItem value="ontario">Ontario</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="state">
                        Weight <span className="text-red-500">*</span>
                      </Label>
                      <Select id="state">
                        <SelectTrigger className="p-5">
                          {" "}
                          {/* Consistent padding */}
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alberta">Alberta</SelectItem>
                          <SelectItem value="british">
                            British Columbia
                          </SelectItem>
                          <SelectItem value="manitoba">Manitoba</SelectItem>
                          <SelectItem value="brunswick">
                            New Brunswick
                          </SelectItem>
                          <SelectItem value="ontario">Ontario</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="fullName5">
                        Quantity <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        id="fullName5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Product Type <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">Product Details</Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Product Value <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Collection Amount{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 flex flex-col gap-2">
                      <Label htmlFor="text">Remark</Label>
                      <Textarea placeholder="Type Here.." rows="3" />
                    </div>
                  </div>
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
