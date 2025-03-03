import Card from "@/components/ui/card-snippet";

import VFormWithLabel from "./vform-with-label";

import { Button } from "@/components/ui/button";
import Link from "next/link";
const FormLayout = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-1">
          <Card title="Add New Operator">
            <VFormWithLabel />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
