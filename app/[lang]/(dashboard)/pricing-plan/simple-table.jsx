import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricingPlans } from "./data";
import { Button } from "@/components/ui/button";

const SimpleTable = () => {
  const columns = [
    {
      key: "parcel type",
      label: "Parcel Type",
    },
    {
      key: "pickup location",
      label: "Pickup Location",
    },
    {
      key: "delivery location",
      label: "Delivery Location",
    },
    {
      key: "weight",
      label: "Weight",
    },
    {
      key: "delivery time",
      label: "Delivery Time",
    },
    {
      key: "price",
      label: "Price",
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
        {pricingPlans.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.parcelType}</TableCell>
            <TableCell>{item.pickupLocation}</TableCell>
            <TableCell>{item.deliveryLocation}</TableCell>
            <TableCell>{item.weight}</TableCell>
            <TableCell>{item.deliveryTime}</TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
