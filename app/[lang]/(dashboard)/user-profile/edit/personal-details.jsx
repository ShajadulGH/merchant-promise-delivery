"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const divisions = {
  Dhaka: { Tongi: ["Area 1", "Area 2"], Gulshan: ["Area 3", "Area 4"] },
  Chattogram: {
    Agrabad: ["Area 5", "Area 6"],
    Halishahar: ["Area 7", "Area 8"],
  },
};

const PersonalDetails = () => {
  const [nidImage, setNidImage] = useState(null); // State for NID image
  const [tradeLicenseImage, setTradeLicenseImage] = useState(null); // State for Trade License image
  const [tinCertificateImage, setTinCertificateImage] = useState(null); // State for TIN Certificate image
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
  // Handle file upload for NID
  const handleNidUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNidImage(reader.result); // Set the uploaded image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file upload for Trade License
  const handleTradeLicenseUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTradeLicenseImage(reader.result); // Set the uploaded image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file upload for TIN Certificate
  const handleTinCertificateUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTinCertificateImage(reader.result); // Set the uploaded image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="rounded-t-none pt-6">
      <CardContent>
        <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">
              Company Name
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="firstName"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="lastName" className="mb-2">
              Your Name
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="lastName "
              placeholder="Enter Your Name"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="message" className="mb-2">
              Full Address
            </Label>
            <Textarea placeholder="Enter Full Address" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="message" className="mb-2">
              Business Address
            </Label>
            <Textarea placeholder="Enter Business Address" />
          </div>

          <div className="col-span-12 md:col-span-6">
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
              <SelectTrigger className=" p-5 placeholder:text-base">
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
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="website" className="mb-2">
              Contact Number
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="website"
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="website" className="mb-2">
              Email
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="website"
              placeholder="Enter Email"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="website" className="mb-2">
              Password
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="website"
              placeholder="Enter Password"
            />
          </div>

          {/* NID Section */}
          <div className="col-span-12 md:col-span-4">
            <Label htmlFor="nid" className="mb-2">
              NID
            </Label>
            <Input
              id="nid"
              type="file"
              accept="image/*"
              onChange={handleNidUpload}
            />
            {/* Display the uploaded NID image */}
            {nidImage && (
              <div className="mt-4">
                <Image
                  src={nidImage}
                  alt="Uploaded NID"
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              </div>
            )}
          </div>

          {/* Trade License Section */}
          <div className="col-span-12 md:col-span-4">
            <Label htmlFor="tradeLicense" className="mb-2">
              Trade License
            </Label>
            <Input
              id="tradeLicense"
              type="file"
              accept="image/*"
              onChange={handleTradeLicenseUpload}
            />
            {/* Display the uploaded Trade License image */}
            {tradeLicenseImage && (
              <div className="mt-4">
                <Image
                  src={tradeLicenseImage}
                  alt="Uploaded Trade License"
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              </div>
            )}
          </div>

          {/* TIN Certificate Section */}
          <div className="col-span-12 md:col-span-4">
            <Label htmlFor="tinCertificate" className="mb-2">
              TIN Certificate
            </Label>
            <Input
              id="tinCertificate"
              type="file"
              accept="image/*"
              onChange={handleTinCertificateUpload}
            />
            {/* Display the uploaded TIN Certificate image */}
            {tinCertificateImage && (
              <div className="mt-4">
                <Image
                  src={tinCertificateImage}
                  alt="Uploaded TIN Certificate"
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button color="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;
