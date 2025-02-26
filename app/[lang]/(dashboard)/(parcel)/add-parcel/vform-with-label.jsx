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
import { useState } from "react";
const divisions = {
  Dhaka: { Tongi: ["Area 1", "Area 2"], Gulshan: ["Area 3", "Area 4"] },
  Chattogram: {
    Agrabad: ["Area 5", "Area 6"],
    Halishahar: ["Area 7", "Area 8"],
  },
};

const VFormWithLabel = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  const [isOpen, setIsOpen] = useState(false); // Initially dropdown is closed

  const handleSelection = (value) => {
    if (step === 1) {
      setSelectedDivision(value);
      setSelectedDistrict("");
      setSelectedArea("");
      setSearchQuery(""); // Reset search query after selecting a division
      setStep(2); // Move to the next step for district selection
    } else if (step === 2) {
      setSelectedDistrict(value);
      setSelectedArea("");
      setStep(3); // Move to the next step for area selection
    } else if (step === 3) {
      setSelectedArea(value);
      setStep(0); // Finish the selection process
      setIsOpen(false); // Close dropdown after area selection
    }
  };

  const getDropdownOptions = () => {
    if (step === 1) {
      const filteredDivisions = Object.keys(divisions).filter(
        (division) => division.toLowerCase().includes(searchQuery.toLowerCase()) // Filter divisions based on search query
      );
      return filteredDivisions; // Return filtered divisions
    }
    if (step === 2) return Object.keys(divisions[selectedDivision] || {}); // Districts
    if (step === 3)
      return divisions[selectedDivision]?.[selectedDistrict] || []; // Areas
    return [];
  };

  const getPlaceholder = () => {
    if (selectedArea) {
      return `${selectedDivision} > ${selectedDistrict} > ${selectedArea}`;
    } else if (selectedDistrict) {
      return `${selectedDivision} > ${selectedDistrict}`;
    } else if (selectedDivision) {
      return `${selectedDivision} >`; // Update to show division in placeholder
    } else if (step === 1) {
      return "Select Division";
    } else if (step === 2) {
      return "Select District";
    } else {
      return "Select Area";
    }
  };
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
                    <SelectTrigger className="p-5 placeholder:text-base">
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
                    className="p-5 placeholder:text-base" // Consistent padding
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
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="fullName5">
                        Customer Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        id="fullName5"
                        className="p-5 placeholder:text-base" // Consistent padding
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Customer Contact Number{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5 placeholder:text-base" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 flex flex-col gap-2">
                      <Label htmlFor="text">Customer Address</Label>
                      <Textarea placeholder="Type Here.." rows="3" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-2">
                      <Label htmlFor="location">Select Location</Label>
                      <Select
                        onValueChange={handleSelection}
                        open={isOpen} // Controlled open state
                        onOpenChange={(open) => {
                          // Open the dropdown on first click and keep it open until area is selected
                          if (!isOpen) setIsOpen(true);
                          else if (step === 3) setIsOpen(false); // Close after area selection
                        }}
                      >
                        <SelectTrigger className="p-5 placeholder:text-base">
                          <SelectValue>{getPlaceholder()}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {step === 1 && (
                            <div className="flex p-2">
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // Handle search query change
                                className="p-2 border rounded-md w-full"
                                placeholder="Search Division"
                              />
                            </div>
                          )}
                          {getDropdownOptions().map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
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
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="store">
                        Service Type <span className="text-red-500">*</span>
                      </Label>
                      <Select id="store">
                        <SelectTrigger className="p-5 placeholder:text-base">
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
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="state">
                        Item Type <span className="text-red-500">*</span>
                      </Label>
                      <Select id="state">
                        <SelectTrigger className="p-5 placeholder:text-base">
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
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="state">
                        Weight <span className="text-red-500">*</span>
                      </Label>
                      <Select id="state">
                        <SelectTrigger className="p-5 placeholder:text-base">
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
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="fullName5">
                        Quantity <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        id="fullName5"
                        className="p-5 placeholder:text-base" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Product Type <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5 placeholder:text-base" // Consistent padding
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">Product Details</Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5 placeholder:text-base" // Consistent padding
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Product Value <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5 placeholder:text-base" // Consistent padding
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                      <Label htmlFor="email5">
                        Collection Amount{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        id="email5"
                        className="p-5 placeholder:text-base" // Consistent padding
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
