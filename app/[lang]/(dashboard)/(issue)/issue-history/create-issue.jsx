"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";

import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Select from "react-select";

const users = [
  { value: "202", label: "Cleopetra" },
  { value: "203", label: "Nicolas" },
  { value: "204", label: "John Doe" },
];
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
              <Label htmlFor="category" className="mb-1.5 text-default-600">
                Category
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={users}
                styles={styles}
              />
            </div>
            <div>
              <Label htmlFor="subCategory" className="mb-1.5 text-default-600">
                Sub Category
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={users}
                styles={styles}
                // isMulti
              />
            </div>
            <div>
              {" "}
              <Label htmlFor="text">
                Description <span className="text-red-500">*</span>
              </Label>
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
                className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg cursor-pointer hover:bg-red-700 transition"
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
          <SheetFooter className="pb-10 flex flex-row">
            <SheetClose>
              <Button className="mr-3" type="button" variant="outline">
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
