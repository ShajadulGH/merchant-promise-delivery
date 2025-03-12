"use client";
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import Select from "react-select";

export const data = [
  {
    sl: 1,
    invoice: { id: "INV-24896", status: "delivered", date: "01/07/2024" },
    parcel: {
      companyName: "Pathao Logistics",
      storeName: "Dhaka Electronics",
      merchantOrderId: "ORD12345",
      serviceType: "Cash on Delivery",
      deliveryType: "Express",
    },
    status: "delivered",
    customer: {
      name: "Abdul Rahman",
      number: "01712345678",
      address: "123 Mirpur Road",
      district: "Dhaka",
      area: "Mirpur",
    },
    amount: { cod: 3280, collected: 3280, totalCharge: 97.8 },
    paymentReturnStatus: {
      status: "paid",
      code: "PAID123",
      paidAt: "01/07/2024 10:00 AM",
    },
  },
  {
    sl: 2,
    invoice: { id: "INV-24625", status: "partial delivered", date: "10/07/2024" },
    parcel: {
      companyName: "eCourier",
      storeName: "Chittagong Fashion",
      merchantOrderId: "ORD67890",
      serviceType: "Standard Delivery",
      deliveryType: "Regular",
    },
    status: "partial delivered",
    customer: {
      name: "Fatima Begum",
      number: "01898765432",
      address: "456 Agrabad C/A",
      district: "Chittagong",
      area: "Agrabad",
    },
    amount: { cod: 1500, collected: 1500, totalCharge: 50.5 },
    paymentReturnStatus: {
      status: "partial return",
      code: "PRET456",
      paidAt: "10/07/2024 02:00 PM",
    },
  },
];

const statusOptions = [
  { value: "delivered", label: "Delivered" },
  { value: "partial delivered", label: "Partial Delivered" },
  { value: "canceled", label: "Canceled" },
  { value: "paid", label: "Paid" },
  { value: "partial return", label: "Partial Return" },
  { value: "returned", label: "Returned" },
];

const GlobalFilter = ({ selectedFilters, setSelectedFilters }) => {
  const handleChange = (selectedOptions) => {
    setSelectedFilters(selectedOptions ? selectedOptions.map((opt) => opt.value) : []);
  };

  return (
    <div>
      <strong>Filter by Status:</strong>
      <Select
        options={statusOptions}
        isMulti
        value={statusOptions.filter((opt) => selectedFilters.includes(opt.value))}
        onChange={handleChange}
        placeholder="Select statuses..."
      />
    </div>
  );
};

const Table = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const table = useReactTable({
    data,
    columns: [
      { accessorKey: "sl", header: "SL" },
      {
        accessorKey: "invoice",
        header: "Invoice",
        cell: ({ row }) => {
          const d = row.original.invoice;
          return `🧾 ${d.id}\n📅 ${d.date}\n✅ ${d.status}`;
        },
      },
      {
        accessorKey: "parcel",
        header: "Parcel",
        cell: ({ row }) => {
          const d = row.original.parcel;
          return `🚚 ${d.companyName}\n🏪 ${d.storeName}\n📦 ${d.merchantOrderId}\n🛠 ${d.serviceType} (${d.deliveryType})`;
        },
      },
      {
        accessorKey: "customer",
        header: "Customer",
        cell: ({ row }) => {
          const d = row.original.customer;
          return `👤 ${d.name}\n📞 ${d.number}\n🏡 ${d.address}\n📍 ${d.district}, ${d.area}`;
        },
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
          const d = row.original.amount;
          return `💰 COD: ${d.cod} BDT\n💵 Collected: ${d.collected} BDT\n📦 Charge: ${d.totalCharge} BDT`;
        },
      },
      {
        accessorKey: "paymentReturnStatus",
        header: "Payment Status",
        cell: ({ row }) => {
          const d = row.original.paymentReturnStatus;
          return `💳 ${d.status}\n🔢 ${d.code}\n⏰ ${d.paidAt}`;
        },
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter: selectedFilters },
    onGlobalFilterChange: setSelectedFilters,
    globalFilterFn: (row, columnId, filterValues) => {
      if (!filterValues.length) return true;
      const statuses = [
        row.original.invoice.status,
        row.original.status,
        row.original.paymentReturnStatus.status,
      ];
      return filterValues.some((filter) => statuses.includes(filter));
    },
  });

  return (
    <div>
      <GlobalFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ border: "1px solid black", padding: "8px", textAlign: "left", whiteSpace: "pre-line" }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
