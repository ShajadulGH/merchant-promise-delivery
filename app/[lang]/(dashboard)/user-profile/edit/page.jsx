// "use client";

// import { Card } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import PersonalDetails from "./personal-details";
// // import ChangePassword from "./change-password";
// // import CommingSoon from "./comming-soon";

// const Settings = () => {
//   const tabs = [
//     {
//       label: "Personal Details",
//       value: "personal",
//     },
//     {
//       label: "Change Password",
//       value: "password",
//     },
//     {
//       label: "Others",
//       value: "others",
//     },
//   ];
//   return (
//     <div className="grid grid-cols-12 gap-6 mt-6">
//       <div className="col-span-12 lg:col-span-4 space-y-6">
//         <Card>Something</Card>
//       </div>
//       <div className="col-span-12 lg:col-span-8">
//         <Tabs defaultValue="personal" className="p-0 px-1">
//           <TabsList className="bg-card  flex-1 overflow-x-auto md:overflow-hidden  w-full px-5 pt-6 pb-2.5 h-fit border-b border-default-200  rounded-none justify-start gap-12 rounded-t-md">
//             {tabs.map((tab, index) => (
//               <TabsTrigger
//                 className="capitalize px-0  data-[state=active]:shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 before:transition-all before:duration-150 relative before:absolute
//            before:left-1/2 before:-bottom-[11px] before:h-[2px]
//              before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
//                 value={tab.value}
//                 key={`tab-${index}`}
//               >
//                 {tab.label}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           <TabsContent value="personal" className="mt-0">
//             {/* <PersonalDetails /> */}
//           </TabsContent>
//           <TabsContent value="password" className="mt-0">
//             {/* <ChangePassword /> */}
//           </TabsContent>
//           <TabsContent value="others" className="mt-0">
//             {/* <CommingSoon /> */}
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Settings;
"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import PersonalDetails from "./personal-details";
import ChangePassword from "./change-password";
import BankDetails from "./bank-details";
import SocialDetails from "./social-details";
// import CommingSoon from "./comming-soon";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("personal"); // State to manage the active tab

  const tabs = [
    {
      label: "Personal Details",
      value: "personal",
    },

    {
      label: "Bank Details",
      value: "bank",
    },
    {
      label: "Social Details",
      value: "social",
    },
    {
      label: "Change Password",
      value: "password",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 mt-6">
      {/* Left Sidebar */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <Card className="p-6">
          <div className="space-y-2">
            {tabs.map((tab, index) => (
              <div
                key={`tab-${index}`}
                className={`cursor-pointer p-3 rounded-lg transition duration-150 ${
                  activeTab === tab.value
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Right Section */}
      <div className="col-span-12 lg:col-span-8">
        {activeTab === "personal" && (
          <div>
            <PersonalDetails />
          </div>
        )}
        {activeTab === "password" && (
          <div>
            <ChangePassword />
          </div>
        )}
        {activeTab === "bank" && (
          <div>
            <BankDetails />
          </div>
        )}
        {activeTab === "social" && (
          <div>
            <SocialDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
