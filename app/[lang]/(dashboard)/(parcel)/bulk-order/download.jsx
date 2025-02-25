import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
export default function DownloadExcel() {
  const handleDownload = () => {
    // Sample data
    const data = [
      { Name: "Alice", Age: 25, City: "New York" },
      { Name: "Bob", Age: 30, City: "Los Angeles" },
    ];

    // Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate Excel file and trigger download
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "data.xlsx");
  };

  return (
    <div className=" w-full text-center border-dashed border  rounded-md py-[52px] flex  items-center flex-col bg-green-100">
      <Button
        onClick={handleDownload}
        color="success"
        className="m-2.5"
        type="button"
      >
        <Icon
          icon="file-icons:microsoft-excel"
          className="w-6 h-6 mr-2"
          text-green-600
        />
        Download
      </Button>
      <h4 className=" text-2xl font-medium mb-1 text-card-foreground/80">
        Download the Sample File
      </h4>
      <div className=" text-xs text-muted-foreground">
        ( Click to Download )
      </div>
    </div>
  );
}
