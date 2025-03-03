"use client";

import Card from "@/components/ui/card-snippet";
import SimpleTable from "./simple-table";

const TailwindUiTable = () => {
  return (
    <div className=" space-y-6">
      <Card title="Pricing Plan">
        <SimpleTable />
      </Card>
    </div>
  );
};

export default TailwindUiTable;
