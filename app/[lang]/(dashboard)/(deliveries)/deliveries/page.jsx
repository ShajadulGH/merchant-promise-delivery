"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdvancedTable from "./data-table/advanced";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

const Settings = () => {
  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Active",
      value: "active",
    },

    {
      label: "Delivered",
      value: "delivered",
    },
    {
      label: "Returned",
      value: "returned",
    },
  ];
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Deliveries</BreadcrumbItem>
        <BreadcrumbItem>Delivery List</BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid grid-cols-12  gap-6 mt-6 mb-6">
        <div className="col-span-12 lg:col-span-12">
          <Tabs defaultValue="all" className="p-0 px-1">
            <TabsList className="bg-card  flex-1 overflow-x-auto md:overflow-hidden  w-full px-5 pt-6 pb-2.5 h-fit border-b border-default-200  rounded-none justify-start gap-12 rounded-t-md mb-6">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  className="capitalize px-0  data-[state=active]:shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 before:transition-all before:duration-150 relative before:absolute
           before:left-1/2 before:-bottom-[11px] before:h-[2px]
             before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                  value={tab.value}
                  key={`tab-${index}`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <AdvancedTable />
            </TabsContent>
            <TabsContent value="active" className="mt-0">
              {/* <AdvancedTable /> */}
            </TabsContent>
            <TabsContent value="delivered" className="mt-0">
              {/* <AdvancedTable /> */}
            </TabsContent>
            <TabsContent value="returned" className="mt-0">
              {/* <AdvancedTable /> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Settings;
