"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SocialDetails = () => {
  return (
    <Card className="rounded-t-none pt-6">
      <CardContent>
        <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">
              Website
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="firstName"
              placeholder="Enter Website Link"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">
              Facebook
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="firstName"
              placeholder="Enter Facebook Link"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">
              Instagram
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="firstName"
              placeholder="Enter Instagram Link"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="firstName" className="mb-2">
              Twitter
            </Label>
            <Input
              className=" p-5 placeholder:text-base"
              id="firstName"
              placeholder="Enter Twitter Link"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button color="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialDetails;
