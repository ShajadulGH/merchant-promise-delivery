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
import FileUploader from "./file-uploader-restrictions";
import FileDownload from "./download";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const VFormWithLabel = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-2  ">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-none pb-0">
              <CardTitle>Merchant Bulk Parcel Import </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                  <Label htmlFor="store">Select Youre Store</Label>
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
                <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
                  <Label htmlFor="fullName5">Pickup Address</Label>
                  <Input
                    type="text"
                    placeholder="Address"
                    id="fullName5"
                    disabled
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2  ">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <FileDownload />
            </div>
            <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
              <FileUploader />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;
