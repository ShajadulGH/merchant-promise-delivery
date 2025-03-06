"use client";

import Card from "@/components/ui/card-snippet";
import SimpleTable from "./simple-table";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

const TailwindUiTable = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Pricing Plan</BreadcrumbItem>
        <BreadcrumbItem>Price List</BreadcrumbItem>
      </Breadcrumbs>

      <div className=" space-y-6 mt-5">
        <Card title="Pricing Plan">
          <SimpleTable />
        </Card>
      </div>
    </>
  );
};

export default TailwindUiTable;
