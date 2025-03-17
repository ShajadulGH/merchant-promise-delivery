"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EcommerceStats from "./components/ecommerce-stats";
import Topten from "./components/top-ten";
// import DatePickerWithRange from "@/components/date-picker-with-range";
const EcommercePageView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div className="mt-5 flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">Dashboard</div>
        Date: 3/17/2025
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                <EcommerceStats />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Topten />
        </div>
      </div>
    </div>
  );
};

export default EcommercePageView;
