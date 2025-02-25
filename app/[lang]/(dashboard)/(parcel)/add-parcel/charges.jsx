"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopTen = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle>Parcel Charges </CardTitle>
      </CardHeader>
      <CardContent className=" p-5">
        <div className="space-y-3">
          <div className="flex justify-between ">
            <span>Weight Package</span>
            <span className="font-medium ">Not Confirm</span>
          </div>

          <div className="flex justify-between">
            <span>Service Type</span>
            <span className="font-medium ">Not Confirm</span>
          </div>

          <div className="flex justify-between">
            <span>Item Type</span>
            <span className="font-medium ">Not Confirm</span>
          </div>

          <div className="border-t pt-2 space-y-3">
            <div className="flex justify-between">
              <span>Collection Amount</span>
              <span className="font-medium text-gray-800">0.00</span>
            </div>

            <div className="flex justify-between">
              <span>Cod Percent</span>
              <span className="font-medium text-gray-800">0%</span>
            </div>

            <div className="flex justify-between">
              <span>Weight Charge</span>
              <span className="font-medium text-gray-800">0.00</span>
            </div>

            <div className="flex justify-between">
              <span>Cod Charge</span>
              <span className="font-medium text-gray-800">0.00</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="font-medium text-gray-800">0.00</span>
            </div>
          </div>

          <div className="border-t pt-2 mt-2 flex justify-between text-lg font-semibold">
            <span>Total Charge</span>
            <span>0.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;
