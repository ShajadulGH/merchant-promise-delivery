"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const CreateTask = ({ open, onClose }) => {
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileNames(files.map((file) => file.name));
  };
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="pt-5">
        <SheetHeader className="flex-row items-center justify-between mb-4">
          <span className="text-lg font-semibold text-default-900">
            Create Issue
          </span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="store">
                Category <span className="text-red-500">*</span>
              </Label>
              <Select id="store">
                <SelectTrigger className="p-5 placeholder:text-base">
                  <SelectValue placeholder="Select Category" />
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
            <div>
              <Label htmlFor="store">
                Sub Category <span className="text-red-500">*</span>
              </Label>
              <Select id="store">
                <SelectTrigger className="p-5 placeholder:text-base">
                  <SelectValue placeholder="Select Sub Category" />
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
            <div>
              {" "}
              <Label htmlFor="text">Description</Label>
              <Textarea placeholder="Description..." rows="3" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload Files
              </label>

              {/* Hidden File Input */}
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Custom Upload Button */}
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg cursor-pointer hover:bg-blue-700 transition"
              >
                <UploadCloud className="w-5 h-5" />
                Upload
              </label>

              {/* Display Selected File Names */}
              {fileNames.length > 0 && (
                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 text-center">
                  {fileNames.map((name, index) => (
                    <p key={index} className="truncate">
                      {name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <SheetFooter className="pb-10">
            <SheetClose>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </SheetClose>
            <Button type="button">Create Issue</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTask;
