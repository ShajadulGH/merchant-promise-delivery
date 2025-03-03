"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
const VFormWithLabel = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Operator Name</Label>
          <Input type="text" placeholder="Enter Operator Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="email5">Operator Email</Label>
          <Input type="email" placeholder="Enter Operator Email" id="email5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Mobile Number</Label>
          <Input type="text" placeholder="Enter Mobile Number" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="email5">Password</Label>
          <Input type="email" placeholder="Enter Password" id="email5" />
        </div>

        <div className="col-span-2">
          <Button type="submit">Add Operator</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;
