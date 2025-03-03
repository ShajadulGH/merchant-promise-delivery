// Pathao Copy

// "use client";

// import { useState } from "react";
// import Card from "@/components/ui/card-snippet";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { ChevronDown } from "lucide-react"; // Import ChevronDown icon
// import { districtsData } from "./data";

// const TailwindUiTable = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [expandedZone, setExpandedZone] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   // Handle district click
//   const handleDistrictClick = (district) => {
//     setSelectedDistrict(district);
//     setIsDialogOpen(true);
//     setExpandedZone(null); // Reset expanded zone when a new district is selected
//   };

//   // Handle zone click
//   const handleZoneClick = (zone) => {
//     setExpandedZone(expandedZone === zone ? null : zone);
//   };

//   // Filter districts and zones based on search query
//   const filteredDistricts = districtsData.filter((district) =>
//     district.district.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredZones = selectedDistrict?.zones.filter((zone) =>
//     zone.zone.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="grid grid-cols-12">
//       <div className="col-span-12  mb-5">
//         <Card title="Coverage Area">
//           {/* Search Bar */}
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search districts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus: ring-red-600"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {filteredDistricts.map((district, index) => (
//               <div
//                 key={index}
//                 className="p-4 border rounded-[5px] cursor-pointer hover:bg-red-100 shadow-sm "
//                 onClick={() => handleDistrictClick(district)}
//               >
//                 <h3 className="font-semibold text-lg hover:text-red-600">
//                   {district.district}
//                 </h3>
//                 <p className="text-sm text-gray-800">
//                   Zones: {district.zones.length}
//                 </p>
//                 <p className="text-sm text-gray-800">
//                   Areas:{" "}
//                   {district.zones.reduce(
//                     (acc, zone) => acc + zone.areas.length,
//                     0
//                   )}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>

//       {/* Dialog for Zones and Areas */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>{selectedDistrict?.district}</DialogTitle>
//           </DialogHeader>
//           {/* Search Bar for Zones */}
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search zones..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>
//           <div className="space-y-2">
//             {filteredZones?.map((zone, index) => (
//               <div key={index}>
//                 <div
//                   className="p-3 border rounded-lg cursor-pointer hover:bg-red-100 flex items-center justify-between"
//                   onClick={() => handleZoneClick(zone.zone)}
//                 >
//                   <h4 className="font-medium">{zone.zone}</h4>
//                   <ChevronDown
//                     className={`w-5 h-5 transition-transform ${
//                       expandedZone === zone.zone ? "rotate-180" : ""
//                     }`}
//                   />
//                 </div>
//                 {expandedZone === zone.zone && (
//                   <div className="pl-6 mt-2">
//                     <div className="p-3 border rounded-lg bg-gray-50">
//                       <div className="grid grid-cols-2 gap-2">
//                         {zone.areas.map((area, areaIndex) => (
//                           <p key={areaIndex} className="text-sm text-gray-700">
//                             {area}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <DialogClose className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 mt-4 text-white">
//             Close
//           </DialogClose>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default TailwindUiTable;

// Promise 1

// "use client";

// import { useState } from "react";
// import Card from "@/components/ui/card-snippet";
// import { districtsData } from "./data";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const TailwindUiTable = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [selectedZone, setSelectedZone] = useState(null);
//   const [districtSearchQuery, setDistrictSearchQuery] = useState("");
//   const [zoneSearchQuery, setZoneSearchQuery] = useState("");
//   const [areaSearchQuery, setAreaSearchQuery] = useState("");

//   // Handle district click
//   const handleDistrictClick = (district) => {
//     setSelectedDistrict(district);
//     setSelectedZone(null); // Reset selected zone when a new district is selected
//     setZoneSearchQuery(""); // Reset zone search query
//     setAreaSearchQuery(""); // Reset area search query
//   };

//   // Handle zone click
//   const handleZoneClick = (zone) => {
//     setSelectedZone(zone);
//     setAreaSearchQuery(""); // Reset area search query
//   };

//   // Filter districts based on search query
//   const filteredDistricts = districtsData.filter((district) =>
//     district.district.toLowerCase().includes(districtSearchQuery.toLowerCase())
//   );

//   // Filter zones based on search query
//   const filteredZones = selectedDistrict?.zones.filter((zone) =>
//     zone.zone.toLowerCase().includes(zoneSearchQuery.toLowerCase())
//   );

//   // Filter areas based on search query
//   const filteredAreas = selectedZone?.areas.filter((area) =>
//     area.toLowerCase().includes(areaSearchQuery.toLowerCase())
//   );

//   return (
//     <div className="grid grid-cols-3 gap-4 h-screen p-4">
//       {/* Left Column: Districts */}
//       <div className="col-span-1 border-r pr-4 h-screen">
//         <ScrollArea className="h-full">
//           <Card title="Districts">
//             {/* Search Bar for Districts */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Search districts..."
//                 value={districtSearchQuery}
//                 onChange={(e) => setDistrictSearchQuery(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
//               />
//             </div>
//             <div className="space-y-2">
//               {filteredDistricts.map((district, index) => (
//                 <div
//                   key={index}
//                   className="p-4 border rounded-[5px] cursor-pointer hover:bg-red-100 shadow-sm"
//                   onClick={() => handleDistrictClick(district)}
//                 >
//                   <h3 className="font-semibold text-lg hover:text-red-600">
//                     {district.district}
//                   </h3>
//                   <p className="text-sm text-gray-800">
//                     Zones: {district.zones.length}
//                   </p>
//                   <p className="text-sm text-gray-800">
//                     Areas:{" "}
//                     {district.zones.reduce(
//                       (acc, zone) => acc + zone.areas.length,
//                       0
//                     )}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </ScrollArea>
//       </div>

//       {/* Middle Column: Zones (Only shown if a district is selected) */}
//       {selectedDistrict && (
//         <div className="col-span-1 border-r pr-4 h-screen">
//           <ScrollArea className="h-full">
//             <Card title="Zones">
//               {/* Search Bar for Zones */}
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Search zones..."
//                   value={zoneSearchQuery}
//                   onChange={(e) => setZoneSearchQuery(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
//                 />
//               </div>
//               <div className="space-y-2">
//                 {filteredZones?.map((zone, index) => (
//                   <div
//                     key={index}
//                     className="p-4 border rounded-[5px] cursor-pointer hover:bg-red-100 shadow-sm"
//                     onClick={() => handleZoneClick(zone)}
//                   >
//                     <h4 className="font-medium">{zone.zone}</h4>
//                     <p className="text-sm text-gray-800">
//                       Areas: {zone.areas.length}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           </ScrollArea>
//         </div>
//       )}

//       {/* Right Column: Areas (Only shown if a zone is selected) */}
//       {selectedZone && (
//         <div className="col-span-1 h-screen">
//           <ScrollArea className="h-full">
//             <Card title="Areas">
//               {/* Search Bar for Areas */}
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Search areas..."
//                   value={areaSearchQuery}
//                   onChange={(e) => setAreaSearchQuery(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
//                 />
//               </div>
//               <div className="space-y-2">
//                 {filteredAreas?.map((area, areaIndex) => (
//                   <div
//                     key={areaIndex}
//                     className="p-4 border rounded-[5px] hover:bg-red-100 shadow-sm"
//                   >
//                     <p className="text-sm text-gray-700">{area}</p>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           </ScrollArea>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TailwindUiTable;
// Promise 2
"use client";

import { useState } from "react";
import Card from "@/components/ui/card-snippet";

import { districtsData } from "./data";
import { ChevronDown } from "lucide-react"; // Import ChevronDown icon

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
    <div className="grid grid-cols-12">
      <div className="col-span-12 mb-5">
        <Card title="Coverage Area">
          {/* Search Bar for Districts */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-1 mb-4">
              {" "}
              <input
                type="text"
                placeholder="Search districts..."
                value={districtSearchQuery}
                onChange={(e) => setDistrictSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="cold-span-3 lg:col-span-1">Something!</div>
            <div className="col-span-3 lg:col-span-1">Something!</div>
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
                  <div className="mt-2 pl-4">
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
                          className="p-3 border rounded-[5px] cursor-pointer hover:bg-red-100 flex items-center justify-between"
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
                          <div className="mt-2 pl-6">
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

                            <div className="p-3 border rounded-[5px] bg-gray-50">
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
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TailwindUiTable;
