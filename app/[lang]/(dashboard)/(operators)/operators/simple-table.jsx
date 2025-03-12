import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users } from "./data";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SimpleTable = () => {
  const columns = [
    {
      key: "name",
      label: "name",
    },
    {
      key: "mobile number",
      label: "mobile number",
    },
    {
      key: "email",
      label: "email",
    },
    {
      key: "action",
      label: "action",
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.mobileNumber}</TableCell>
            <TableCell>{item.email}</TableCell>

            <TableCell className="ltr:pr-5 rtl:pl-5">
              <div className="flex gap-3 items-center">
                <Button
                  asChild
                  size="icon"
                  className="h-9 w-9 rounded bg-default-100 text-red-500 hover:text-primary-foreground"
                >
                  <Link href="#">
                    <Icon icon="mdi:edit" className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="icon"
                  className="h-9 w-9 rounded bg-default-100 text-red-500 hover:text-primary-foreground"
                >
                  <Icon icon="mdi:delete" className="w-5 h-5" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
