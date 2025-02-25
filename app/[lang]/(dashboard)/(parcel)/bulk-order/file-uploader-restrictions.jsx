"use client";
import { Fragment, useState } from "react";
import { Upload } from "lucide-react";
import { toast as reToast } from "react-hot-toast";
const FileUploaderRestrictions = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith(".xlsx")) {
        setFile(selectedFile);
        reToast.success("Successfully uploaded the file");
      } else {
        reToast.error("Please upload a valid .xlsx file.");
      }
    }
  };
  return (
    <Fragment>
      <div className="w-full text-center rounded-md py-[52px] flex items-center flex-col bg-red-100">
        <div className="h-12 w-12 inline-flex rounded-md bg-muted items-center justify-center mb-3">
          <input
            type="file"
            accept=".xlsx" // Restrict to .xlsx files
            onChange={handleFileChange}
            className="hidden" // Hide the default input
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="h-6 w-6 text-red-600" />{" "}
            {/* Only the icon is visible */}
          </label>
        </div>
        <h4 className="text-2xl font-medium mb-1 text-black">
          Upload a (.xlsx) File to Import Parcels
        </h4>
        <div className="text-xs text-black">
          ( Drop files here or click to upload )
        </div>
      </div>
    </Fragment>
  );
};

export default FileUploaderRestrictions;
