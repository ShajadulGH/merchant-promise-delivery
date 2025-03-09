"use client";

import { Badge } from "@/components/ui/badge";
import { labels, priorities, statuses } from "../data/data";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns = [
  {
    accessorKey: "sl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SL" />
    ),
    cell: ({ row }) => <div className="w-[20px]">{row.getValue("sl")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("invoice")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "parcel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parcel" />
    ),
    cell: ({ row }) => <div className="w-[100%]">{row.getValue("parcel")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="ltr:mr-2 rtl:ml-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),

    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="ltr:mr-2 rtl:ml-2 h-4 w-4 text-muted-foreground" />
          )}
          <Badge
            color={
              (priority.label === "High" && "destructive") ||
              (priority.label === "Medium" && "info") ||
              (priority.label === "Low" && "warning")
            }
          >
            {priority.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
