// "use client";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { DataTableViewOptions } from "./data-table-view-options";
// import { statuses } from "../data/data";
// import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// import { DatePicker } from "antd";
// import "antd/dist/reset.css";
// import { Icon } from "@iconify/react";
// const { RangePicker } = DatePicker;

// // Helper function to flatten nested objects into a single string
// const flattenObject = (obj, prefix = "") => {
//   return Object.keys(obj).reduce((acc, k) => {
//     const pre = prefix.length ? `${prefix}.` : "";
//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       Object.assign(acc, flattenObject(obj[k], pre + k));
//     } else {
//       acc[pre + k] = obj[k];
//     }
//     return acc;
//   }, {});
// };

// export function DataTableToolbar({ table, printTable, exportToExcel }) {
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

//   const handleGlobalFilterChange = (event) => {
//     const value = event.target.value;
//     table.setGlobalFilter(value); // Set the global filter value
//   };

//   // Custom global filter function
//   table.setOptions((prev) => ({
//     ...prev,
//     globalFilterFn: (row, columnId, filterValue) => {
//       const flattenedRow = flattenObject(row.original);
//       return Object.values(flattenedRow).some((val) =>
//         String(val).toLowerCase().includes(filterValue.toLowerCase())
//       );
//     },
//   }));

//   return (
//     <div className="flex flex-1 flex-wrap items-center gap-2">
//       <Input
//         placeholder="Search Anything..."
//         value={table.getState().globalFilter ?? ""}
//         onChange={handleGlobalFilterChange}
//         className="h-8 min-w-[200px] max-w-sm border-red-500 placeholder:text-red-500 font-bold"
//       />
//       <Button
//         variant="outline"
//         size="icon"
//         className="h-8 w-8 rounded bg-white text-red-500 hover:text-primary-foreground"
//       >
//         <Icon
//           onClick={printTable}
//           icon="mdi:printer"
//           className="w-5 h-5 text-blue-700"
//         />
//       </Button>
//       <Button
//         variant="outline"
//         size="icon"
//         className="h-8 w-8 rounded bg-white text-red-500 hover:text-primary-foreground"
//       >
//         <Icon
//           onClick={exportToExcel}
//           icon="mdi:file-excel"
//           className="w-5 h-5 text-green-700"
//         />
//       </Button>

//       <RangePicker
//         onChange={handleDateChange}
//         className="custom-range-picker"
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
// "use client";
// import React from "react";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { DataTableViewOptions } from "./data-table-view-options";
// import { statuses } from "../data/data";
// import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// import Select from "react-select";
// import { Icon } from "@iconify/react";

// // Helper function to flatten nested statuses for filtering
// const extractStatuses = (row) => {
//   return [
//     row.original.invoice.status.toLowerCase(),
//     row.original.status.toLowerCase(),
//     row.original.paymentReturnStatus.status.toLowerCase(),
//   ];
// };

// export function DataTableToolbar({ table, printTable, exportToExcel }) {
//   const isFiltered = table.getState().columnFilters.length > 0;
//   const [selectedStatuses, setSelectedStatuses] = React.useState([]);

//   const handleFilterChange = (selectedOptions) => {
//     const values = selectedOptions
//       ? selectedOptions.map((opt) => opt.value)
//       : [];
//     setSelectedStatuses(values);
//     table.setGlobalFilter(values);
//   };

//   // Apply a custom global filter function
//   table.setOptions((prev) => ({
//     ...prev,
//     globalFilterFn: (row, columnId, filterValues) => {
//       if (!filterValues.length) return true;
//       const statuses = extractStatuses(row);
//       return filterValues.some((filter) => statuses.includes(filter));
//     },
//   }));

//   return (
//     <div className="flex flex-1 flex-wrap items-center gap-2">
//       {/* 🌍 Global Status Filter */}
//       <Select
//         options={statuses.map((status) => ({
//           value: status.value.toLowerCase(),
//           label: status.label,
//         }))}
//         isMulti
//         value={statuses.filter((status) =>
//           selectedStatuses.includes(status.value.toLowerCase())
//         )}
//         onChange={handleFilterChange}
//         placeholder="Filter by Status..."
//         className="min-w-[200px] max-w-sm"
//       />

//       {/* 📄 Print Table */}
//       <Button
//         variant="outline"
//         size="icon"
//         className="h-8 w-8 rounded bg-white text-gray-500"
//       >
//         <Icon
//           onClick={printTable}
//           icon="mdi:printer"
//           className="w-5 h-5 text-blue-700"
//         />
//       </Button>

//       {/* 📥 Export to Excel */}
//       <Button
//         variant="outline"
//         size="icon"
//         className="h-8 w-8 rounded bg-white text-gray-500"
//       >
//         <Icon
//           onClick={exportToExcel}
//           icon="mdi:file-excel"
//           className="w-5 h-5 text-green-700"
//         />
//       </Button>

//       {/* ❌ Reset Filters */}
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

//       {/* ⚙ View Options */}
//       <DataTableViewOptions table={table} />
//     </div>
//   );
// }

"use client";
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { Icon } from "@iconify/react";

const { RangePicker } = DatePicker;

// Helper function to flatten nested objects for global search
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

// Helper function to extract statuses for filtering
const extractStatuses = (row) => {
  return [
    row.original.invoice.status.toLowerCase(),
    row.original.paymentReturnStatus.status.toLowerCase(),
  ];
};

export function DataTableToolbar({ table, printTable, exportToExcel }) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [selectedStatuses, setSelectedStatuses] = React.useState([]);

  const handleGlobalFilterChange = (event) => {
    const value = event.target.value;
    table.setGlobalFilter(value); // Set the global filter value for search
  };

  const handleStatusFilterChange = (selectedValues) => {
    setSelectedStatuses(selectedValues);
    table.setGlobalFilter(selectedValues); // Set the global filter value for status
  };

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

  // Custom global filter function for both search and status filter
  table.setOptions((prev) => ({
    ...prev,
    globalFilterFn: (row, columnId, filterValue) => {
      // If filterValue is an array (status filter), check against the status field
      if (Array.isArray(filterValue) && filterValue.length > 0) {
        const statuses = extractStatuses(row);
        return filterValue.some((filter) => statuses.includes(filter));
      }

      // If filterValue is a string (global search), flatten and check for match
      if (typeof filterValue === "string") {
        const flattenedRow = flattenObject(row.original);
        return Object.values(flattenedRow).some((val) =>
          String(val).toLowerCase().includes(filterValue.toLowerCase())
        );
      }

      return true;
    },
  }));

  return (
    <div className="flex flex-1 flex-wrap items-center gap-2">
      {/* 🌍 Global Search */}
      <Input
        placeholder="Search Anything..."
        value={table.getState().globalFilter ?? ""}
        onChange={handleGlobalFilterChange}
        className="h-8 min-w-[200px] max-w-sm border-red-500 placeholder:text-red-500 font-bold"
      />

      {/* 📄 Print Table */}
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded bg-white "
      >
        <Icon
          onClick={printTable}
          icon="mdi:printer"
          className="w-5 h-5 text-blue-700"
        />
      </Button>

      {/* 📥 Export to Excel */}
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded bg-white"
      >
        <Icon
          onClick={exportToExcel}
          icon="mdi:file-excel"
          className="w-5 h-5 text-green-700"
        />
      </Button>

      {/* 🌐 Status Filter */}
      <DataTableFacetedFilter
        column={{
          getFacetedUniqueValues: () => new Map(),
          getFilterValue: () => selectedStatuses,
          setFilterValue: handleStatusFilterChange,
        }}
        options={statuses}
        title="Status"
      />

      {/* 📅 Date Filter */}
      <RangePicker
        onChange={handleDateChange}
        className="custom-range-picker"
      />

      {/* ❌ Reset Filters */}
      {isFiltered && (
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X className="ltr:ml-2 h-4 w-4" />
        </Button>
      )}

      {/* ⚙ View Options */}
      <DataTableViewOptions table={table} />
    </div>
  );
}
