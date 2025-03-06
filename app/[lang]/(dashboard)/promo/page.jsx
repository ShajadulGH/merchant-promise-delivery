"use client";

import CardSnippet from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react"; // Import the Icon component from @iconify/react
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

const Promotion = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Promo</BreadcrumbItem>
        <BreadcrumbItem>Promo Code</BreadcrumbItem>
      </Breadcrumbs>
      <div className="space-y-6 mt-5">
        <CardSnippet title="My Promo">
          <div className="grid grid-cols-2">
            <div className="flex gap-4 col-span-2 lg:col-span-1">
              <Input
                type="text"
                placeholder="Enter Your Promo Code..."
                id="input"
                className="p-5"
              />
              <Button type="submit">Apply Promo</Button>
            </div>
          </div>
        </CardSnippet>
        <Card className="p-5">
          <div className="flex justify-center items-center h-[500px]">
            <Icon icon="mdi:tag" className="w-8 h-8 text-red-600 mr-2" />{" "}
            {/* Promo icon */}
            <p className="font-semibold text-lg text-gray-700">
              No Promo Code Found!!!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Promotion;
