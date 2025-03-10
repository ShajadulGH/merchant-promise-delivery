// // "use client";
// // import { X } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { DataTableViewOptions } from "./data-table-view-options";
// // import { priorities, statuses } from "../data/data";
// // import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// // import { DateRangePicker } from "rsuite";
// // import "rsuite/dist/rsuite.css"; // Import React Suite styles

// // export function DataTableToolbar({ table }) {
// //   const isFiltered = table.getState().columnFilters.length > 0;

// //   return (
// //     <div className="flex flex-1 flex-wrap items-center gap-2">
// //       <Input
// //         placeholder="Search Anything..."
// //         value={table.getState().globalFilter ?? ""}
// //         onChange={(event) => table.setGlobalFilter(event.target.value)}
// //         className="h-8 min-w-[200px] max-w-sm"
// //       />

// //       {table.getColumn("status") && (
// //         <DataTableFacetedFilter
// //           column={table.getColumn("status")}
// //           title="Status"
// //           options={statuses}
// //         />
// //       )}
// //       {table.getColumn("priority") && (
// //         <DataTableFacetedFilter
// //           column={table.getColumn("priority")}
// //           title="Store"
// //           options={priorities}
// //         />
// //       )}

// //       <DateRangePicker
// //         placeholder="Select Date Range"
// //         onChange={(value) => {
// //           // Handle date range filter logic here
// //           console.log("Selected Date Range:", value);
// //         }}
// //         className="h-8" // Tailwind class for height
// //         placement="auto" // Automatically adjust popover position
// //         responsive // Make the picker responsive
// //         style={{ width: "100%", maxWidth: "250px" }} // Limit width for smaller screens
// //       />

// //       {/* Add DateRangePicker here */}

// //       {isFiltered && (
// //         <Button
// //           variant="outline"
// //           onClick={() => table.resetColumnFilters()}
// //           className="h-8 px-2 lg:px-3"
// //         >
// //           Reset
// //           <X className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
// //         </Button>
// //       )}
// //       <DataTableViewOptions table={table} />
// //     </div>
// //   );
// // }

// "use client";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { DataTableViewOptions } from "./data-table-view-options";
// import { priorities, statuses } from "../data/data";
// import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// import { DatePicker } from "antd";
// import "antd/dist/reset.css"; // Import Ant Design styles

// const { RangePicker } = DatePicker;

// export function DataTableToolbar({ table }) {
//   const isFiltered = table.getState().columnFilters.length > 0;

//   const handleDateChange = (dates, dateStrings) => {
//     if (dates) {
//       console.log("Selected Dates:", dates);
//       console.log("Formatted Date Strings:", dateStrings);
//       // Update table filtering logic here
//     } else {
//       console.log("Date selection cleared");
//       // Clear table filtering logic here
//     }
//   };

//   return (
//     <div className="flex flex-1 flex-wrap items-center gap-2">
//       <Input
//         placeholder="Search Anything..."
//         value={table.getState().globalFilter ?? ""}
//         onChange={(event) => table.setGlobalFilter(event.target.value)}
//         className="h-8 min-w-[200px] max-w-sm border-red-500 placeholder:text-red-500 font-bold"
//       />
//       {/* Replace React Suite DateRangePicker with Ant Design RangePicker */}
//       <RangePicker
//         onChange={handleDateChange}
//         className="h-8 border-red-500 text-red-500 "
//       />

//       {table.getColumn("status") && (
//         <DataTableFacetedFilter
//           column={table.getColumn("status")}
//           title="Status"
//           options={statuses}
//         />
//       )}
//       {isFiltered && (
//         <Button
//           variant="outline"
//           onClick={() => table.resetColumnFilters()}
//           className="h-8 px-2 lg:px-3"
//         >
//           Reset
//           <X className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
//         </Button>
//       )}
//       <DataTableViewOptions table={table} />
//     </div>
//   );
// }

"use client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DatePicker } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const { RangePicker } = DatePicker;

// Helper function to flatten nested objects into a single string
const flattenObject = (obj, prefix = "") => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : "";
    if (typeof obj[k] === "object" && obj[k] !== null) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
};

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleDateChange = (dates, dateStrings) => {
    if (dates) {
      console.log("Selected Dates:", dates);
      console.log("Formatted Date Strings:", dateStrings);
      // Update table filtering logic here
    } else {
      console.log("Date selection cleared");
      // Clear table filtering logic here
    }
  };

  const handleGlobalFilterChange = (event) => {
    const value = event.target.value;
    table.setGlobalFilter(value); // Set the global filter value
  };

  // Custom global filter function
  table.setOptions((prev) => ({
    ...prev,
    globalFilterFn: (row, columnId, filterValue) => {
      const flattenedRow = flattenObject(row.original);
      return Object.values(flattenedRow).some((val) =>
        String(val).toLowerCase().includes(filterValue.toLowerCase())
      );
    },
  }));

  return (
    <div className="flex flex-1 flex-wrap items-center gap-2">
      <Input
        placeholder="Search Anything..."
        value={table.getState().globalFilter ?? ""}
        onChange={handleGlobalFilterChange}
        className="h-8 min-w-[200px] max-w-sm border-red-500 placeholder:text-red-500 font-bold"
      />
      {/* Replace React Suite DateRangePicker with Ant Design RangePicker */}
      <RangePicker
        onChange={handleDateChange}
        className="h-8 border-red-500 text-red-500 "
      />

      {table.getColumn("status") && (
        <DataTableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
      )}
      {isFiltered && (
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
        </Button>
      )}
      <DataTableViewOptions table={table} />
    </div>
  );
}
