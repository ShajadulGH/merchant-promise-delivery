"use client";

import SimpleTable from "./simple-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";

const TailwindUiTable = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Operators</BreadcrumbItem>
        <BreadcrumbItem>Operators List</BreadcrumbItem>
      </Breadcrumbs>
      <div className=" space-y-6 mt-5 mb-5">
        <Card className="p-5">
          <div className="flex flex-wrap items-center gap-4 mb-1">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-default-700 mb-2">
                Operators List
              </h3>
            </div>
            <div className="flex-none">
              <Link href="/new-operator">
                <Button type="button">Add Operator</Button>
              </Link>
            </div>
          </div>

          <SimpleTable />
        </Card>
      </div>
    </>
  );
};
export default TailwindUiTable;
