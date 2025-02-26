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
          <div className="flex justify-start ">
            <span className="text-red-500">Rules and Regulations</span>
          </div>
          <div className="flex justify-start">
            Cost might vary depending upon the delivery situations and other
            circumstances.
          </div>
          <div className="flex justify-start">Pickup Last Entry Time 4 pm</div>
          <div className="flex justify-start">
            ** On Demand / Express / Fragile Last Entry Time 12:30 pm, Maximum
            size of any product should not be over 2CFT (In general)
          </div>
          <div className="flex justify-start">
            ** Use Fragile Type for Cosmetics, Liquid grocery, Herbals, Gift
            Items,Electronic gadgets, Lights , Glass items, Food items (dry)
          </div>
          <div className="flex justify-start">
            ** Use Express Delivery Inside Dhaka (2-3 hours) for Cooked Foods
            and other emergency delivery
          </div>
          <div className="flex justify-start">
            ** Inside Dhaka Normal Delivery will take 24-48 hours, On Demand &
            Fragile take 8 hours, Out Side Dhaka it may take 3-5 days
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;
