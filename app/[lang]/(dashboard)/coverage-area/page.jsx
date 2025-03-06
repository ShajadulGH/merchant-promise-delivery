"use client";
import { useState } from "react";
import Card1 from "@/components/ui/card-snippet";

import { districtsData } from "./data";
import { ChevronDown } from "lucide-react"; // Import ChevronDown icon
import Select from "react-select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

const users = [
  { value: "pickup", label: "Pickup Available" },
  { value: "return", label: "Return Available" },
];

// Custom styles for react-select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#ef4444" : "#d1d5db", // Red border when focused
    borderWidth: "2px", // Increase border thickness
    boxShadow: state.isFocused ? "0 0 0 2px #ef4444" : "none", // Red focus ring
    "&:hover": {
      borderColor: "#ef4444", // Red border on hover
    },
  }),
};

const TailwindUiTable = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [expandedDistrict, setExpandedDistrict] = useState(null); // Track expanded district
  const [expandedZone, setExpandedZone] = useState(null); // Track expanded zone
  const [districtSearchQuery, setDistrictSearchQuery] = useState("");
  const [zoneSearchQuery, setZoneSearchQuery] = useState("");
  const [areaSearchQuery, setAreaSearchQuery] = useState("");

  // Handle district click
  const handleDistrictClick = (district) => {
    if (expandedDistrict === district.district) {
      setExpandedDistrict(null); // Collapse if already expanded
      setSelectedDistrict(null); // Deselect district
      setZoneSearchQuery(""); // Reset zone search query
      setAreaSearchQuery(""); // Reset area search query
    } else {
      setExpandedDistrict(district.district); // Expand the clicked district
      setSelectedDistrict(district); // Set selected district
      setSelectedZone(null); // Reset selected zone
      setExpandedZone(null); // Reset expanded zone
      setZoneSearchQuery(""); // Reset zone search query
      setAreaSearchQuery(""); // Reset area search query
    }
  };

  // Handle zone click
  const handleZoneClick = (zone) => {
    if (expandedZone === zone.zone) {
      setExpandedZone(null); // Collapse if already expanded
      setSelectedZone(null); // Deselect zone
      setAreaSearchQuery(""); // Reset area search query
    } else {
      setExpandedZone(zone.zone); // Expand the clicked zone
      setSelectedZone(zone); // Set selected zone
      setAreaSearchQuery(""); // Reset area search query
    }
  };

  // Filter districts based on search query
  const filteredDistricts = districtsData.filter((district) =>
    district.district.toLowerCase().includes(districtSearchQuery.toLowerCase())
  );

  // Filter zones based on search query
  const filteredZones = selectedDistrict?.zones.filter((zone) =>
    zone.zone.toLowerCase().includes(zoneSearchQuery.toLowerCase())
  );

  // Filter areas based on search query
  const filteredAreas = selectedZone?.areas.filter((area) =>
    area.toLowerCase().includes(areaSearchQuery.toLowerCase())
  );

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Coverage Area</BreadcrumbItem>
        <BreadcrumbItem>Coverage List</BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-12 mb-5">
          <Card1 title="Coverage Area">
            {/* Search Bar for Districts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1 mb-4">
                <input
                  type="text"
                  placeholder="Search districts..."
                  value={districtSearchQuery}
                  onChange={(e) => setDistrictSearchQuery(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={users}
                  styles={customStyles} // Apply custom styles
                  isMulti
                  placeholder="Pickup or Return Availability"
                />
              </div>
            </div>

            {/* Districts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredDistricts.map((district, index) => (
                <div key={index}>
                  {/* District Card */}
                  <div
                    className="p-4 border rounded-[5px] cursor-pointer hover:bg-red-100 shadow-sm"
                    onClick={() => handleDistrictClick(district)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg hover:text-red-600">
                        {district.district}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedDistrict === district.district
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
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

                  {/* Zones Dropdown (Only shown if district is expanded) */}
                  {expandedDistrict === district.district && (
                    <Card className="p-5 m-2 bg-gray-50">
                      <div className="mt-2">
                        {/* Search Bar for Zones */}
                        <div className="mb-4">
                          <input
                            type="text"
                            placeholder="Search zones..."
                            value={zoneSearchQuery}
                            onChange={(e) => setZoneSearchQuery(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
                          />
                        </div>

                        {filteredZones?.map((zone, zoneIndex) => (
                          <div key={zoneIndex}>
                            {/* Zone Card */}
                            <div
                              className="p-3 border rounded-[5px] cursor-pointer hover:bg-red-100 flex items-center justify-between mb-2 shadow-sm"
                              onClick={() => handleZoneClick(zone)}
                            >
                              <h4 className="font-medium">{zone.zone}</h4>
                              <ChevronDown
                                className={`w-5 h-5 transition-transform ${
                                  expandedZone === zone.zone ? "rotate-180" : ""
                                }`}
                              />
                            </div>

                            {/* Areas Dropdown (Only shown if zone is expanded) */}
                            {expandedZone === zone.zone && (
                              <div className="mt-2 mb-2 p-5 shadow-sm">
                                {/* Search Bar for Areas */}
                                <div className="mb-4">
                                  <input
                                    type="text"
                                    placeholder="Search areas..."
                                    value={areaSearchQuery}
                                    onChange={(e) =>
                                      setAreaSearchQuery(e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
                                  />
                                </div>

                                <div className="p-3 border rounded-[5px] bg-white shadow-sm">
                                  <div className="grid grid-cols-2 gap-2">
                                    {filteredAreas?.map((area, areaIndex) => (
                                      <p
                                        key={areaIndex}
                                        className="text-sm text-gray-700"
                                      >
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
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </Card1>
        </div>
      </div>
    </div>
  );
};

export default TailwindUiTable;
