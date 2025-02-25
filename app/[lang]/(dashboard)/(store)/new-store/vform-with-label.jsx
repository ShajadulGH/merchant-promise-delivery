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
const VFormWithLabel = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Shop Name</Label>
          <Input type="text" placeholder="Shop Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="email5">Contact Number</Label>
          <Input type="email" placeholder="Contact Number" id="email5" />
        </div>
        <div className="col-span-2  flex flex-col gap-2">
          <Label htmlFor="text">Details</Label>
          <Textarea placeholder="Type Here.." rows="3" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="store">District</Label>
          <div>
            <Select id="store">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alberta">Alberta</SelectItem>
                <SelectItem value="british">British Columbia</SelectItem>
                <SelectItem value="manitoba">Manitoba</SelectItem>
                <SelectItem value="brunswick">New Brunswick</SelectItem>
                <SelectItem value="ontario">Ontario</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="store">Area</Label>
          <div>
            <Select id="store">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alberta">Alberta</SelectItem>
                <SelectItem value="british">British Columbia</SelectItem>
                <SelectItem value="manitoba">Manitoba</SelectItem>
                <SelectItem value="brunswick">New Brunswick</SelectItem>
                <SelectItem value="ontario">Ontario</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="col-span-2">
          <Button type="submit">Create Store</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;
