"use client";

import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Promo = () => {
  return (
    <div className=" space-y-6">
      <Card title="My Promo">
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
      </Card>
    </div>
  );
};

export default Promo;
