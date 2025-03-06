"use client";
import Card from "@/components/ui/card-snippet";
import VFormWithLabel from "./vform-with-label";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
const FormLayout = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Store</BreadcrumbItem>
        <BreadcrumbItem>New Store</BreadcrumbItem>
      </Breadcrumbs>
      <div className="space-y-5 mt-5">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <Card title="Create New Store">
              <VFormWithLabel />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
