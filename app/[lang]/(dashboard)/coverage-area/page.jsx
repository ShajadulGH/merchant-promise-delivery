"use client";

import { useState } from "react";
import Card from "@/components/ui/card-snippet";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react"; // Import ChevronDown icon
import { districtsData } from "./data";

const TailwindUiTable = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedZone, setExpandedZone] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(districtsData);
  // Handle district click
  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    setIsDialogOpen(true);
    setExpandedZone(null); // Reset expanded zone when a new district is selected
  };

  // Handle zone click
  const handleZoneClick = (zone) => {
    setExpandedZone(expandedZone === zone ? null : zone);
  };

  // Filter districts and zones based on search query
  const filteredDistricts = districtsData.filter((district) =>
    district.district.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredZones = selectedDistrict?.zones.filter((zone) =>
    zone.zone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 mb-5">
        <Card title="Coverage Area">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search districts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus: ring-red-600"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredDistricts.map((district, index) => (
              <div
                key={index}
                className="p-4 border rounded-[5px] cursor-pointer hover:bg-gray-50 shadow-sm "
                onClick={() => handleDistrictClick(district)}
              >
                <h3 className="font-semibold text-lg hover:text-red-600">
                  {district.district}
                </h3>
                <p className="text-sm text-gray-800">
                  Zones: {district.zones.length}
                </p>
                <p className="text-sm text-gray-800">
                  Areas:{" "}
                  {district.zones.reduce(
                    (acc, zone) => acc + zone.areas.length,
                    0
                  )}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Dialog for Zones and Areas */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedDistrict?.district}</DialogTitle>
          </DialogHeader>
          {/* Search Bar for Zones */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search zones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="space-y-2">
            {filteredZones?.map((zone, index) => (
              <div key={index}>
                <div
                  className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                  onClick={() => handleZoneClick(zone.zone)}
                >
                  <h4 className="font-medium">{zone.zone}</h4>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedZone === zone.zone ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedZone === zone.zone && (
                  <div className="pl-6 mt-2">
                    <div className="p-3 border rounded-lg bg-gray-50">
                      <div className="grid grid-cols-2 gap-2">
                        {zone.areas.map((area, areaIndex) => (
                          <p key={areaIndex} className="text-sm text-gray-700">
                            {area}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <DialogClose className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 mt-4 text-white">
            Close
          </DialogClose>
        </DialogContent>
      </Dialog>

      <div className="hidden lg:flex lg:justify-center lg:col-span-6">
        <Image
          src="/bdmap.svg"
          alt="Map of Bangladesh"
          width={500}
          height={500}
          className="w-3/4 md:w-1/2 lg:w-3/4"
        />
      </div>
    </div>
  );
};

export default TailwindUiTable;
