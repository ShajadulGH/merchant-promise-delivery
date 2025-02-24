"use client";
import { Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import EcommerceStats from "./ecommerce-stats";
import InvoiceListTable from "./invoice-list-table";
const InvoiceListPage = () => {
  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>Invoice</BreadcrumbItem>
        <BreadcrumbItem>Invoice List</BreadcrumbItem>
      </Breadcrumbs>
      <Card className="mt-6">
        <CardHeader className="flex-row items-center border-none mb-0">
          <CardTitle className="flex-1 text-xl font-medium text-default-900">
            Invoice Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <EcommerceStats />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardContent className="p-0">
          <InvoiceListTable />
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default InvoiceListPage;
